import pytest
import subprocess
import time
import requests
from pathlib import Path
import yaml

class TestFullStack:
    
    @pytest.fixture(scope="class")
    def docker_compose_up(self):
        """Start the full stack using docker-compose"""
        project_root = Path(__file__).parent.parent.parent
        
        # Check if docker-compose.yml exists
        compose_file = project_root / "docker-compose.yml"
        assert compose_file.exists(), "docker-compose.yml not found"
        
        # Start services
        result = subprocess.run([
            "docker-compose", "-f", str(compose_file), "up", "-d", "--build"
        ], cwd=project_root, capture_output=True, text=True)
        
        if result.returncode != 0:
            pytest.skip(f"Failed to start docker-compose: {result.stderr}")
        
        # Wait for services to be ready
        time.sleep(30)
        
        yield
        
        # Cleanup
        subprocess.run([
            "docker-compose", "-f", str(compose_file), "down"
        ], cwd=project_root, capture_output=True)
    
    def test_docker_compose_configuration(self):
        """Test docker-compose.yml configuration"""
        project_root = Path(__file__).parent.parent.parent
        compose_file = project_root / "docker-compose.yml"
        
        with open(compose_file) as f:
            config = yaml.safe_load(f)
        
        assert "services" in config
        assert "backend" in config["services"]
        assert "frontend" in config["services"]
        
        # Check port mappings
        assert "8000:8000" in config["services"]["backend"]["ports"]
        assert "3000:3000" in config["services"]["frontend"]["ports"]
    
    @pytest.mark.integration
    def test_backend_api_health(self, docker_compose_up):
        """Test backend API health check"""
        max_retries = 10
        for i in range(max_retries):
            try:
                response = requests.get("http://localhost:8000/api/health", timeout=5)
                assert response.status_code == 200
                data = response.json()
                assert data["status"] == "healthy"
                return
            except requests.RequestException:
                if i == max_retries - 1:
                    pytest.fail("Backend health check failed after maximum retries")
                time.sleep(5)
    
    @pytest.mark.integration
    def test_frontend_availability(self, docker_compose_up):
        """Test frontend is accessible"""
        max_retries = 10
        for i in range(max_retries):
            try:
                response = requests.get("http://localhost:3000", timeout=5)
                assert response.status_code == 200
                assert "The Capability Engine" in response.text
                return
            except requests.RequestException:
                if i == max_retries - 1:
                    pytest.fail("Frontend not accessible after maximum retries")
                time.sleep(5)
    
    @pytest.mark.integration
    def test_email_capture_integration(self, docker_compose_up):
        """Test email capture API end-to-end"""
        # Wait for services to be fully ready
        time.sleep(10)
        
        test_email = f"test-{int(time.time())}@example.com"
        
        response = requests.post(
            "http://localhost:8000/api/email/capture",
            json={"email": test_email},
            timeout=10
        )
        
        assert response.status_code == 201
        data = response.json()
        assert data["success"] is True
        assert "code" in data
        assert len(data["code"]) == 10
    
    @pytest.mark.integration
    def test_cors_headers(self, docker_compose_up):
        """Test CORS configuration"""
        response = requests.options(
            "http://localhost:8000/api/health",
            headers={"Origin": "http://localhost:3000"}
        )
        
        assert response.status_code in [200, 204]
        assert "access-control-allow-origin" in response.headers
    
    @pytest.mark.integration
    def test_security_headers(self, docker_compose_up):
        """Test security headers are present"""
        response = requests.get("http://localhost:8000/api/health")
        
        security_headers = [
            "strict-transport-security",
            "content-security-policy", 
            "x-frame-options",
            "x-content-type-options",
            "referrer-policy"
        ]
        
        for header in security_headers:
            assert header in response.headers, f"Missing security header: {header}"
    
    @pytest.mark.integration
    def test_rate_limiting(self, docker_compose_up):
        """Test API rate limiting"""
        # Make multiple rapid requests to trigger rate limiting
        responses = []
        for i in range(10):
            response = requests.post(
                "http://localhost:8000/api/email/capture",
                json={"email": f"test{i}@example.com"},
                timeout=5
            )
            responses.append(response)
        
        # At least one request should be rate limited
        rate_limited = any(r.status_code == 429 for r in responses)
        assert rate_limited, "Rate limiting not working properly"