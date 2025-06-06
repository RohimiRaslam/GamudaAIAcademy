from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class User(BaseModel):
    username: str
    email: str
    full_name: str = ""

users = []

@router.post("/users")
def create_user(user):
    users.append(user)
    return {"Users": users}

@router.get("/users")
def get_users():
    return {"users": users}