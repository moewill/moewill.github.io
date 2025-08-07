from pydantic import BaseModel, Field, validator
from typing import Optional
from datetime import datetime
import re

class EmailInput(BaseModel):
    email: str = Field(
        ..., 
        max_length=255,
        description="Valid email address"
    )
    
    @validator('email')
    def validate_email(cls, v):
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(pattern, v):
            raise ValueError('Invalid email format')
        return v.lower()

class EmailResponse(BaseModel):
    success: bool
    code: Optional[str] = None
    message: str

class HealthResponse(BaseModel):
    status: str
    timestamp: float