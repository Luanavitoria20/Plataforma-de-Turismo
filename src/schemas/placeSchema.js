import { z } from 'zod';

export const CreatePlaceSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  description: z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres'),
  address: z.string().min(5, 'Endereço deve ter pelo menos 5 caracteres'),
  type: z.enum(['restaurante', 'hotel', 'atração'], 'Tipo inválido'),
  rating: z.number().min(0).max(5),
});

export const UpdatePlaceSchema = z.object({
  name: z.string().min(3).optional(),
  description: z.string().min(10).optional(),
  address: z.string().min(5).optional(),
  type: z.enum(['restaurante', 'hotel', 'atração']).optional(),
  rating: z.number().min(0).max(5).optional(),
});
