import { z } from 'zod'
import { RoleSchema } from '@/types/Role'

export const UserSchema = z.object({
	contact: z.string(),
	created_at: z.string().date(),
	email: z.string().email(),
	email_verified_at: z.string().date().nullable(),
	first_name: z.string(),
	id: z.number(),
	key: z.union([z.string(), z.number()]).optional(),
	last_name: z.string(),
	middle_name: z.string().nullable(),
	roles: z.array(RoleSchema),
	updated_at: z.string().date(),
})

export type User = z.infer<typeof UserSchema>
