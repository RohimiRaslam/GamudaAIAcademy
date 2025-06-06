from fastapi import FastAPI, Depends, Request, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from typing import Optional

valid_tokens = {
    "user123": {"username":"john_doe", "role": "user"},
    "admin456": {"username": "admin_user", "role":"admin"}
}

security = HTTPBearer()
app = FastAPI()

async def auth_dep(request: Request, credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials

    if token not in valid_tokens:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail = "invalid auth token",
            headers = {"WWW-Auth": "Bearer"},
        )
    
    user_info = valid_tokens[token]
    print(f"auth midware executed for: {user_info['username']}")

    return user_info

async def admin_deps(request: Request, user_info: dict = Depends(auth_dep)):
    if user_info.get("role") != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail = "admin access required"


        )
    print(f"{user_info['username']}")
    return user_info