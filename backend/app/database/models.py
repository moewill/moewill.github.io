from sqlalchemy import Column, Integer, String, DateTime, Index
from sqlalchemy.sql import func
from .connection import Base

class EmailCapture(Base):
    __tablename__ = "email_captures"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, nullable=False, index=True)
    code = Column(String(10), unique=True, nullable=False, index=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    __table_args__ = (
        Index('idx_email_captures_email', 'email'),
        Index('idx_email_captures_code', 'code'),
    )