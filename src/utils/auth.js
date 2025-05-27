import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const SECRET = "segredo_super_secreto" // pode usar .env em produção

export function generateToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: "1h" })
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET)
}

export async function hashPassword(password) {
  const saltRounds = 10
  return await bcrypt.hash(password, saltRounds)
}

export async function comparePassword(password, hash) {
  return await bcrypt.compare(password, hash)
}
