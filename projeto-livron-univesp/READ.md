# Livron - Plataforma de Organização de Livros

## Descrição
Livron é uma aplicação web que permite aos usuários gerenciar sua biblioteca de livros, cadastrando, listando e filtrando por autor, gênero e status de leitura. O objetivo é tornar o controle dos livros simples e intuitivo.

## Funcionalidades
- Cadastro de usuários e livros  
- Listagem de livros por título, autor ou gênero  
- Marcar livros como “lidos” ou “em andamento”  
- Avaliação e comentários dos livros  
- Interface responsiva e amigável  

## Tecnologias Utilizadas
- **Frontend:** ReactJS  
- **Backend:** Node.js + Express  
- **Banco de Dados:** SQLite  
- **Controle de Versão:** Git  
- **Estilização:** CSS  

## Estrutura do Projeto
PROJETO-LIVRON-UNIVESP/
├── backend/
│   ├── db/
│   │   └── database.js
│   ├── node_modules/
│   └── src/
│       └── routes/
│           └── server.js
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── LivroCard.jsx
│   │   │   ├── LivroForm.jsx
│   │   │   └── SelectedBooks.jsx
│   │   ├── pages/
│   │   │   └── Home.js
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── cloud.js
│   │   ├── App.css
│   │   ├── App.js
│   │   └── index.js
├── .env
├── package.json
└── README.md


## Como Rodar o Projeto

# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Instale as dependências do frontend
cd frontend
npm install

# Instale as dependências do backend
cd ../backend
npm install

# Configure o banco de dados no arquivo database.js

# Rode o backend
npm start

# Rode o frontend
cd frontend
npm start
Acesse no navegador: http://localhost:3000


# Contato - Marcela Lima
Email: marcelabarroslimaa@gmail.com