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
git clone https://github.com/seu-usuario/Plataforma-de-Turismo.git

2. Instale as dependências:
npm install

## Uso
npm run dev

## 📁 Estrutura de Pastas
src/
├── controllers/
│ ├── adminController.js
│ ├── loginController.js
│ ├── placeController.js
│ └── userController.js
├── middleware/
│ ├── authMiddleware.js
│ └── validatee.js
├── routes/
│ ├── loginRoutes.js
│ ├── placeRoutes.js
│ └── RegisterRouter.js
├── schemas/
│ ├── placeSchemas.js
│ └── registerSchemas.js
├── services/
│ ├── adminService.js
│ ├── loginService.js
│ ├── placeService.js
│ └── userService.js
├── utils/
│ └── auth.js
├── app.js
└── server.js


## 🔁 Rotas da API

### Autenticação
| Método | Rota       | Descrição                   |
|--------|------------|-----------------------------|
| POST   | /register  | Cadastro de novo turista     |
| POST   | /login     | Login de turista ou admin    |

### Locais turísticos
| Método | Rota         | Descrição                      |
|--------|--------------|--------------------------------|
| GET    | /places      | Lista todos os locais (turistas) |
| POST   | /places      | Cadastra novo local (admins)     |
| PUT    | /places/:id  | Edita local por ID (admins)      |
| DELETE | /places/:id  | Remove local por ID (admins)     |

## 🧪 Testando com Insomnia ou Postman

1. Faça login com um usuário.
2. Copie o token JWT retornado.
3. Nas rotas protegidas (como POST /places), adicione no header:
Authorization: Bearer <seu_token_jwt_aqui>

## Desenvolver
Luana Vitoria Santos Araujo