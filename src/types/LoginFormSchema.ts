import { z } from 'zod'

export const LoginFormSchema = z.object({
	email: z.string().email(),
	password: z.string(),
	token: z.string().nullable(),
})
