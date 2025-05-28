import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

import bcrypt from 'bcrypt';
import { generateToken } from '../utils/auth.js';

export async function checkEmailExists(email) {
  const user = await prisma.user.findUnique({ where: { email } });
  const admin = await prisma.admin.findUnique({ where: { email } });
  return Boolean(user || admin);
}

export async function loginUser(email, password) {
  const user = await prisma.user.findUnique({ where: { email } });
  const admin = await prisma.admin.findUnique({ where: { email } });

  const account = user || admin;

  if (!account) throw new Error('Email ou senha inválidos!');

  const match = await bcrypt.compare(password, account.password);
  if (!match) throw new Error('Email ou senha inválidos!');

  const token = generateToken({ id: account.id, email: account.email, isAdmin: !!admin });

  return { id: account.id, name: account.name, token };
}
