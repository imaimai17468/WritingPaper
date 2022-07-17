def preprocess(ocode):
    tokens = [r'－', r'‐', r'−', r'-', r'‒', r'—', r'–', r'―']
    repls = ['>', '+', '-', '<', '.', ',', '[', ']']
    rcode = ocode
    for v in range(len(repls)):
        rcode = rcode.replace(repls[v], tokens[v])
    return rcode

str = input()
str = preprocess(str)
print(str)
