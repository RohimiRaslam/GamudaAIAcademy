from fastapi import FastAPI, Depends, Request

async def auth_dependency(request: Request):
    print("auth middleware executed")
    return "authenticated"

async def admin_dependency(request:Request):
    print("admin middleware executed")
    return "admin verified"

app = FastAPI()

@app.get("/public")
async def public_endpoint():
    return {"message": "public endpoint"}

@app.get("/admin")
async def admin_endpoint(
    auth: str = Depends(auth_dependency),
    admin: str = Depends(admin_dependency)
):
    return {"message": "admin endpoint"}