from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uuid

app = FastAPI()

# Habilitar CORS para que React pueda comunicarse
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Memoria temporal para los secretos (en un diccionario)
secrets = {}

@app.post("/api/create")
def create_secret(secret: str):
    key = str(uuid.uuid4())
    secrets[key] = secret
    return {"link": f"http://localhost:3000/reveal/{key}"}

@app.get("/api/reveal/{key}")
def reveal_secret(key: str):
    if key in secrets:
        secret = secrets.pop(key)
        return {"secret": secret}
    raise HTTPException(status_code=404, detail="Este secreto ya fue revelado o no existe")
