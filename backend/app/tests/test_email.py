import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from ..main import app
from ..database.connection import get_db, Base
from ..database.models import EmailCapture

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base.metadata.create_all(bind=engine)

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

client = TestClient(app)

def test_capture_email_success():
    response = client.post(
        "/api/email/capture",
        json={"email": "test@example.com"}
    )
    assert response.status_code == 201
    data = response.json()
    assert data["success"] is True
    assert "code" in data
    assert len(data["code"]) == 10

def test_capture_email_duplicate():
    client.post("/api/email/capture", json={"email": "duplicate@example.com"})
    response = client.post("/api/email/capture", json={"email": "duplicate@example.com"})
    assert response.status_code == 409
    assert "Email already exists" in response.json()["detail"]

def test_capture_email_invalid_format():
    response = client.post(
        "/api/email/capture",
        json={"email": "invalid-email"}
    )
    assert response.status_code == 422

def test_health_check():
    response = client.get("/api/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert "timestamp" in data