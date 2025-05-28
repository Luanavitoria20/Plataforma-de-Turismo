import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// Número de rounds usados para encriptar a senha
const SALT_ROUNDS = 10;

// Chave secreta do JWT (vinda do .env)
const JWT_SECRET = process.env.JWT_SECRET;

// Função para encriptar a senha
export async function hashPassword(password) {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

// Função para comparar senha digitada com a senha salva
export async function comparePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

// Função para gerar o token JWT
export function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email }, // payload do token
    JWT_SECRET, // chave secreta
    { expiresIn: "1h" } // tempo de validade
  );
}

// ✅ Corrigido para "verifyToken"
export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}
