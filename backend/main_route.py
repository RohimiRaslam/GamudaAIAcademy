from fastapi import FastAPI
from routers import users, items

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello world"}

app.include_router(
    users.router,
    prefix = "/users",
    tags = ["Users"],
    responses = {404: {"description" : "Not found"}}
)

app.include_router(
    items.router,
    prefix = "/items",
    tags = ["Items"],
    responses = {404: {"description" : "Not found"}}
)