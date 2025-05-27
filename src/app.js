
import express from "express"
import RegisterRoutesRouter from "./routes/RegisterRouter.js"
import placeRouter from "./routes/placeRouter.js"
import loginRouter from "./routes/loginRouter.js"

const app = express()

// Permite receber dados em JSON
app.use(express.json())

// Rotas principais
app.use("/register", RegisterRoutesRouter) // Rotas de registro (user e admin)
app.use("/place", placeRouter)             // Rotas de locais turísticos
app.use("/login", loginRouter)             // Rota de login

export default app
