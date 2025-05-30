# Plataforma-de-Turismo
Esta API REST foi desenvolvida para uma plataforma de turismo. Nela, turistas podem criar uma conta, fazer login e visualizar locais turísticos cadastrados. Já os administradores têm permissões para cadastrar, editar, remover e listar esses locais (operações CRUD).

## ✅ Funcionalidades

### Turistas
- Criar conta
- Fazer login
- Ver lista de locais turísticos

### Administradores
- Login como admin
- Cadastrar local turístico
- Editar local turístico
- Remover local turístico
- Listar todos os locais

### Outros recursos
- Validação com Zod
- Autenticação com JWT
- Senhas criptografadas com Bcrypt

## 🛠️ Tecnologias usadas

- Node.js
- Express
- SQLite
- Prisma
- Zod
- Bcrypt
- JSON Web Token (JWT)

## ▶️ Como rodar o projeto

1. Clone o repositório:
git clone https://github.com/Luanavitoria20/Plataforma-de-Turismo.git
2. Instale as dependências:
npm install

3. Configure o banco de dados com Prisma:
npx prisma migrate dev --name init

4 . Inicie o servidor:
npm run dev

📁 Estrutura do Projeto
src/
├── controllers/
├── routes/
├── services/
├── schemas/
├── middleware/
├── utils/
├── app.js
└── server.js

🔁 Rotas da API
▪︎ Autenticação
Método	Rota	         Descrição
POST	 /register	  Cadastro de novo turista
POST	 /login	      Login de turista ou admin

▪︎ Locais turísticos
Método	Rota	       Descrição
GET	   /places	     Lista todos os locais (turistas)
POST	 /places	     Cadastra novo local (admins)
PUT	   /places/:id	 Edita local por ID (admins)
DELETE  /places/:id	 Remove local por ID (admins)

🧪 Testando com Insomnia ou Postman
Faça login com um usuário.
Copie o token JWT retornado.
Nas rotas protegidas (como POST /places), adicione no header:
Authorization: Bearer seu_token_jwt_aqui
