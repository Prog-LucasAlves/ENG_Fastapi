# FastAPI + Pydantic + Frontend HTML + Deploy no Render

Este é um projeto básico utilizando **FastAPI** com **Pydantic** para validação de dados, **SQLite** como banco de dados.

## 📌 Tecnologias Utilizadas

- **[FastAPI](https://fastapi.tiangolo.com/)** para o backend
- **[Pydantic](https://pydantic-docs.helpmanual.io/)** para validação de dados
- **[SQLite](https://www.sqlite.org/index.html)** como banco de dados
- **HTML** + **JavaScript** para o frontend
- **[Render](https://render.com/)** para hospedagem

## 📂 Estrutura do Projeto

```bash
/ENG_FASTAPI
│── /templates          # Frontend HTML + JS
│   ├── index.html
│   ├── script.js
│── .gitignore          # Arquivos a serem ignorados no Git
│── .python-version     # Versão do Python
│── main.py             # Backend FastAPI
│── Procfile            # Arquivo para execução no Render
│── README.md           # Descrição do projeto
│── render.yaml         # Configuração de Deploy
│── requirements.txt    # Dependências
│── start.sh            # Script para iniciar o servidor
```

## ⚡ Como Rodar o Projeto Localmente

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/Prog-LucasAlves/ENG_Fastapi
cd ENG_FASTAPI
```

### 2️⃣ Criar um Ambiente Virtual

```bash
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate  # Windows
```

### 3️⃣ Instalar as Dependências

```bash
pip install -r requirements.txt
```

### 4️⃣ Executar o Backend

```bash
uvicorn main:app --reload
```

A API estará rodando em: **http://127.0.0.1:8000**

## 🌍 Deploy no Render

### 1️⃣ Criar o Repositório no GitHub e Enviar o Código

```bash

```

### 2️⃣ Configurar o Render

1. Acesse [Render.com](https://render.com/)
2. Clique em **New Web Service**
3. Conecte o repositório do GitHub
4. Defina as configurações:
    - **Environment:** Python
    - **Build Command:** `pip install -r requirements.txt`
    - **Start Command:** ``bash start.sh`
    ![IMG](../ENG_Fastapi/ìmage/render.png)
