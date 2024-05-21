import { z } from 'zod'

export const RoleSchema = z.object({
	created_at: z.string().date(),
	guard_name: z.string(),
	id: z.number(),
	key: z.union([z.string(), z.number()]).optional(),
	name: z.string(),
	updated_at: z.string().date(),
})

export type Role = z.infer<typeof RoleSchema>
