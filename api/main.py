import os
from fastapi import FastAPI
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def get_root():
    return {"message": "Hello World"}

class TestParam(BaseModel):
    input : str
    code : str
    
@app.post("/")
def post_root(test: TestParam):
    return (test.input + test.code)

# メインプロセス       
if __name__ == '__main__':
    print("Start")