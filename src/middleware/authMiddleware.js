// Importa a função que verifica o token
import { verifyToken } from "../utils/auth.js";

// Middleware para verificar o token JWT
export function authMiddleware(req, res, next) {
  try {
    // Pega o token do cabeçalho "Authorization"
    const authHeader = req.headers.authorization;

    // Verifica se o cabeçalho existe
    if (!authHeader) {
      return res.status(401).json({ message: "Token não enviado" });
    }

    // Espera-se o formato: "Bearer <token>", então divide e pega o segundo item
    const token = authHeader.split(" ")[1];

    // Verifica se o token foi extraído corretamente
    if (!token) {
      return res.status(401).json({ message: "Token inválido" });
    }

    // Verifica se o token é válido e decodifica
    const decoded = verifyToken(token);

    // Salva os dados do usuário na requisição para usar depois
    req.user = decoded;

    // Vai para a próxima função da rota
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
}
