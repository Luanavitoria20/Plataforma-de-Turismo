import express from "express";

// Importa as rotas da aplicação
import registerRouter from "./routes/RegisterRouter.js";
import placeRouter from "./routes/placeRouter.js";
import loginRouter from "./routes/loginRouter.js";

const app = express();


app.use(express.json());

// Rotas para os diferentes recursos da API
app.use("/register", registerRouter);  // Registro de usuários
app.use("/login", loginRouter);               // Login dos usuários
app.use("/places", placeRouter);              // Gerenciamento de locais turísticos

export default app;
