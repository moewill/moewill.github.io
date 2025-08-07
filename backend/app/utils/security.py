import secrets
import string
from sqlalchemy.orm import Session

def generate_unique_code(length: int = 10) -> str:
    """Generate a cryptographically secure random alphanumeric code"""
    alphabet = string.ascii_uppercase + string.digits
    return ''.join(secrets.choice(alphabet) for _ in range(length))

def ensure_unique_code(db: Session, length: int = 10) -> str:
    """Generate a unique code that doesn't exist in database"""
    from ..database.models import EmailCapture
    
    max_attempts = 10
    for _ in range(max_attempts):
        code = generate_unique_code(length)
        existing = db.query(EmailCapture).filter(EmailCapture.code == code).first()
        if not existing:
            return code
    
    raise Exception("Unable to generate unique code after maximum attempts")