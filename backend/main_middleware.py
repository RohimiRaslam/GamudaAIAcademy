from fastapi import FastAPI, Request
from starlette.middleware.base import BaseHTTPMiddleware

class EmptyMiddleWare(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        path = request.url.path
        print("Path: "+str(path))

        print("before endpoint")

        response = await call_next(request)

        print("after endpoint")

        return response
    
app = FastAPI()
app.add_middleware(EmptyMiddleWare)    

@app.get("/hw")
def get_midware():
    print("hello world")