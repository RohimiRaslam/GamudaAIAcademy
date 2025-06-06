from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class Items(BaseModel):
    itemname: str
    item_id: str
    # full_name: str = None

items = []

@router.post("/items")
def create_item(item:Items):
    items.append(item)
    return {"Items": items}

@router.get("/items")
def get_items():
    return {"items": items}