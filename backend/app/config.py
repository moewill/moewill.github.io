from pydantic_settings import BaseSettings
from typing import Optional
import os

class Settings(BaseSettings):
    database_url: str = "sqlite:///./app.db"
    secret_key: str = "your-secret-key-here-change-in-production"
    api_host: str = "0.0.0.0"
    api_port: int = 8000
    frontend_url: str = "http://localhost:3000"
    rate_limit_per_minute: int = 5
    log_level: str = "INFO"
    
    class Config:
        env_file = ".env"

settings = Settings()