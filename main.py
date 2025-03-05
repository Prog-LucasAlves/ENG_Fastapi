from fastapi import FastAPI

from routes import auth, users

app = FastAPI(
    title="FastAPI com Pydantic e JWT",
    description="API com autenticação JWT e banco de dados SQLite",
    version="0.1.0",
)

# Incluindo as rotas
app.include_router(auth.router)
app.include_router(users.router)


@app.get("/")
def home():
    return {"message": "API FastAPI rodando com sucesso!"}
