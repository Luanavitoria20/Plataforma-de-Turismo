# 🏝️ Plataforma-de-Turismo

---

Esta API REST foi desenvolvida para uma **plataforma de turismo**. Nela, turistas podem criar uma conta, fazer login e visualizar locais turísticos cadastrados. Já os administradores têm permissões para cadastrar, editar, remover e listar esses locais (operações **CRUD**). ✨

---

## ✅ Funcionalidades

### 👣 Turistas

* 🧑‍🤝‍🧑 Criar conta
* 🔑 Fazer login
* 🗺️ Ver lista de locais turísticos

### 🛠️ Administradores

* 🔐 Login como admin
* ➕ Cadastrar local turístico
* ✏️ Editar local turístico
* 🗑️ Remover local turístico
* 📋 Listar todos os locais

### 🔎 Outros recursos

* ✅ Validação com Zod
* 🔒 Autenticação com JWT
* 🔐 Senhas criptografadas com Bcrypt

## 🛠️ Tecnologias usadas

* ⚡ Node.js
* 🚏 Express
* 🗄️ SQLite
* 🔗 Prisma
* 🛡️ Zod
* 🔑 Bcrypt
* 🎫 JSON Web Token (JWT)

## ▶️ Como rodar o projeto

1. 📥 Clone o repositório:

```bash
git clone https://github.com/Luanavitoria20/Plataforma-de-Turismo.git
```

2. 📦 Instale as dependências:

```bash
npm install
```

3. 🗄️ Configure o banco de dados com Prisma:

```bash
npx prisma migrate dev --name init
```

4. ▶️ Inicie o servidor:

```bash
npm run dev
```

## 📁 Estrutura do Projeto

```
src/
├── 📂 controllers/
├── 🛣️ routes/
├── ⚙️ services/
├── 📜 schemas/
├── 🧩 middleware/
├── 🛠️ utils/
├── 🚀 app.js
└── 🖥️ server.js
```

## 🔁 Rotas da API

### 🔑 Autenticação

| Método | Rota      | Descrição                    |
| ------ | --------- | ---------------------------- |
| POST   | /register | ✍️ Cadastro de novo turista  |
| POST   | /login    | 🔓 Login de turista ou admin |

### 🗺️ Locais turísticos

| Método | Rota        | Descrição                           |
| ------ | ----------- | ----------------------------------- |
| GET    | /places     | 📜 Lista todos os locais (turistas) |
| POST   | /places     | 🏗️ Cadastra novo local (admins)    |
| PUT    | /places/:id | ✏️ Edita local por ID (admins)      |
| DELETE | /places/:id | 🗑️ Remove local por ID (admins)    |

## 🧪 Testando com Insomnia ou Postman

1. 🔑 Faça login com um usuário.
2. 📋 Copie o token JWT retornado.
3. 🛡️ Nas rotas protegidas (como `POST /places`), adicione no header:

```
Authorization: Bearer seu_token_jwt_aqui
```
  ### Autores
| [<img loading="lazy" widht= 150 height= 150 src="https://avatars.githubusercontent.com/u/206602777?s=400&u=822619fc7be63ed9a459272707f3f43e427ec6d7&v=4" widht=50><br><sub>Luana Vitoria</sub>](https://github.com/Luanavitoria20) 
| :---: |
