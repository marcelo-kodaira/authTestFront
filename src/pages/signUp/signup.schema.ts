import { z } from 'zod';

export const signUpSchema = z.object({
  name: z.string().nonempty({ message: "Campo obrigatório" }),
  email: z.string().email({ message: "E-mail inválido" }).nonempty({ message: "Campo obrigatório" }),
  password: z.string().min(6, { message: "A senha deve ter ao menos 6 caracteres" }).nonempty({ message: "Campo obrigatório" })
});