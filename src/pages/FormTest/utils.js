import { z } from 'zod';

// eslint-disable-next-line import/prefer-default-export
export const createUserSchema = z.object({
  name: z.string().nonempty('O nome é obrigatório').trim(),
  email: z
    .string()
    .nonempty('O email é obrigatório')
    .email('Email inválido')
    .trim(),
});
