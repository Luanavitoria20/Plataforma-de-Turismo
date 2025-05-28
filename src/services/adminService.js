import { PrismaClient } from '@prisma/client';

import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function registerAdmin({ name, email, password }) {
  const hash = await bcrypt.hash(password, 10);

  const admin = await prisma.admin.create({
    data: { name, email, password: hash },
  });
  return admin;
}
