import { z } from 'zod';

export const RegisterUserSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().regex(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, 'Telefone inválido'),
  password: z.string()
    .min(8, 'Senha deve ter pelo menos 8 caracteres')
    .regex(/[A-Za-z]/, 'Senha deve ter pelo menos uma letra')
    .regex(/^\S*$/, 'Senha não pode conter espaços'),
});

export const RegisterAdminSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string()
    .min(8, 'Senha deve ter pelo menos 8 caracteres')
    .regex(/[A-Za-z]/, 'Senha deve ter pelo menos uma letra')
    .regex(/^\S*$/, 'Senha não pode conter espaços'),
});
