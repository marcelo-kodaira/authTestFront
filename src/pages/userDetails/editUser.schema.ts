import { z } from 'zod';

export const editUserSchema = z.object({
  name: z.string().nonempty({ message: "Campo obrigatório" }),
  email: z.string().email({ message: "E-mail inválido" }).nonempty({ message: "Campo obrigatório" }),
});