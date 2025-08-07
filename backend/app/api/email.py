from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from slowapi import Limiter
from slowapi.util import get_remote_address
import structlog

from ..database.connection import get_db
from ..database.models import EmailCapture
from ..models.email import EmailInput, EmailResponse
from ..utils.security import ensure_unique_code
from ..config import settings

logger = structlog.get_logger()
limiter = Limiter(key_func=get_remote_address)
router = APIRouter()

@router.post("/email/capture", response_model=EmailResponse)
@limiter.limit(f"{settings.rate_limit_per_minute}/minute")
async def capture_email(
    request: Request,
    email_input: EmailInput,
    db: Session = Depends(get_db)
):
    try:
        existing_email = db.query(EmailCapture).filter(
            EmailCapture.email == email_input.email
        ).first()
        
        if existing_email:
            logger.warning("Duplicate email capture attempt", email=email_input.email)
            raise HTTPException(status_code=409, detail="Email already exists")
        
        unique_code = ensure_unique_code(db)
        
        new_capture = EmailCapture(
            email=email_input.email,
            code=unique_code
        )
        
        db.add(new_capture)
        db.commit()
        db.refresh(new_capture)
        
        logger.info("Email captured successfully", 
                   email=email_input.email, 
                   code=unique_code)
        
        return EmailResponse(
            success=True,
            code=unique_code,
            message="Email captured successfully"
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error("Email capture failed", error=str(e))
        db.rollback()
        raise HTTPException(status_code=500, detail="Internal server error")