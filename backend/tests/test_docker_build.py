import pytest
import subprocess
import time
import requests
from pathlib import Path

class TestDockerBuild:
    
    def test_backend_dockerfile_exists(self):
        dockerfile_path = Path(__file__).parent.parent / "Dockerfile"
        assert dockerfile_path.exists(), "Backend Dockerfile should exist"
    
    def test_requirements_txt_exists(self):
        requirements_path = Path(__file__).parent.parent / "requirements.txt"
        assert requirements_path.exists(), "requirements.txt should exist"
    
    @pytest.mark.slow
    def test_backend_docker_build(self):
        """Test that backend Docker image builds successfully"""
        backend_dir = Path(__file__).parent.parent
        
        result = subprocess.run([
            "docker", "build", "-t", "test-backend", str(backend_dir)
        ], capture_output=True, text=True)
        
        assert result.returncode == 0, f"Docker build failed: {result.stderr}"
        
        # Clean up
        subprocess.run(["docker", "rmi", "test-backend"], capture_output=True)
    
    @pytest.mark.slow
    def test_backend_container_health(self):
        """Test that backend container starts and health check passes"""
        backend_dir = Path(__file__).parent.parent
        
        # Build image
        build_result = subprocess.run([
            "docker", "build", "-t", "test-backend-health", str(backend_dir)
        ], capture_output=True, text=True)
        
        assert build_result.returncode == 0, f"Docker build failed: {build_result.stderr}"
        
        # Run container
        container_id = None
        try:
            run_result = subprocess.run([
                "docker", "run", "-d", "-p", "8001:8000", 
                "--name", "test-backend-health",
                "test-backend-health"
            ], capture_output=True, text=True)
            
            assert run_result.returncode == 0, f"Container failed to start: {run_result.stderr}"
            container_id = run_result.stdout.strip()
            
            # Wait for container to be ready
            time.sleep(5)
            
            # Test health endpoint
            response = requests.get("http://localhost:8001/api/health", timeout=10)
            assert response.status_code == 200
            assert response.json()["status"] == "healthy"
            
        finally:
            # Cleanup
            if container_id:
                subprocess.run(["docker", "stop", container_id], capture_output=True)
                subprocess.run(["docker", "rm", container_id], capture_output=True)
            subprocess.run(["docker", "rmi", "test-backend-health"], capture_output=True)
    
    def test_backend_dependencies_install(self):
        """Test that all Python dependencies can be installed"""
        requirements_path = Path(__file__).parent.parent / "requirements.txt"
        
        # Read requirements
        with open(requirements_path) as f:
            requirements = [line.strip() for line in f if line.strip() and not line.startswith('#')]
        
        # Verify we have the essential packages
        essential_packages = ['fastapi', 'uvicorn', 'pydantic', 'sqlalchemy']
        for package in essential_packages:
            assert any(package in req for req in requirements), f"Missing essential package: {package}"