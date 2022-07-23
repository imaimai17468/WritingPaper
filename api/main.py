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

# '>' -> '－'   increment the pointer.
# '<' -> '-'   decrement the pointer.
# '+' -> '‐'   increment the value at the pointer.
# '-' -> '−'   decrement the value at the pointer.
# '.' -> '‒'   output the value at the  pointer as utf-8 character.
# ',' -> '—'   accept one byte of input, storing its value in the mem at the  pointer.
# '[' -> '–'   if the byte at the pointer is zero, then jump it to the matching ']'
# ']' -> '―'   if the byte at the pointer is nonzero, then jump it buck to the matching '['
def preprocess(ocode):
    tokens = [r'－', r'-', r'‐', r'−', r'‒', r'—', r'–', r'―']
    repls = ['>', '<', '+', '-', '.', ',', '[', ']']
    duplis = ['>', '<', '+', '.', ',', '[', ']']
    rcode = ocode
    for v in range(len(duplis)):
        rcode = rcode.replace(duplis[v], '')
    for v in range(len(repls)):
        rcode = rcode.replace(tokens[v], repls[v])
    return rcode

def writing_paper_api(input, code):
    mem_size = 30000
    mem = [0 for i in range(mem_size)]
    ptr = 0
    output = ""
    head = 0
    input_head = 0
    code = preprocess(code)
    code_list = list(code)
    input_list = list(input)
    while head < len(code_list):
        if ptr >= len(mem):
            output += "\nlist index out of range\n"
            return output
        
        if code_list[head] == '+':
            mem[ptr] += 1

        elif code_list[head] == '-':
            mem[ptr] -= 1

        elif code_list[head] == '[':
            if mem[ptr] == 0:
                count = 1
                while count != 0:
                    head += 1
                    if head == len(code_list):
                        output += "\n'―' is missing\n"
                        return output
                    if code_list[head] == '[':
                        count += 1
                    elif code_list[head] == ']':
                        count -= 1
        elif code_list[head] == ']':
            if mem[ptr] != 0:
                count = 1
                while count != 0:
                    head -= 1
                    if head < 0:
                        output += "\n'–' is missing\n"
                    if code_list[head] == ']':
                        count += 1
                    elif code_list[head] == '[':
                        count -= 1
        elif code_list[head] == '.':
            #chr: char -> code point
            output += chr(mem[ptr]) #no line break
        elif code_list[head] == ',':
            #ord: code point -> char
            if input_head >= len(input_list):
                output += "\ninput is missing\n"
                return output
            mem[ptr] = ord(input_list[input_head])
            input_head += 1
        elif code_list[head] == '>':
            ptr += 1       
            if ptr > mem_size:
                output += "\noverflow!\n"
                return output
        elif code_list[head] == "<":
            if ptr == 0:
                output += "\nCan't decrement anymore\n"
            ptr -= 1
        else:
            pass #ignore other symbol

        head += 1 
    
    return output

def bf2wp(ocode):
    tokens = [r'－', r'‐', r'−', r'-', r'‒', r'—', r'–', r'―']
    repls = ['>', '+', '-', '<', '.', ',', '[', ']']
    rcode = ocode
    for v in range(len(repls)):
        rcode = rcode.replace(repls[v], tokens[v])
    return rcode

class RunParam(BaseModel):
    input : str
    code : str
    
class ConvParam(BaseModel):
    code : str
    mode : str

@app.get("/")
def get_root():
    return {"message": "Hello World"}
    
@app.post("/")
def post_root(test: RunParam):
    return writing_paper_api(test.input, test.code)
    # return test.input + test.code

@app.post("/convert")
def post_root(param: ConvParam):
    if param.mode == 'Brainfuck':
        return bf2wp(param.code)
    else:
        return preprocess(param.code)

# メインプロセス       
if __name__ == '__main__':
    print("Start")