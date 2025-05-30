import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()

export async function registerUser({ name, email, password, phone }) {
  const hash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, password: hash, phone },
  });
  return user;
}
