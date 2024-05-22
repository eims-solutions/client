import { Users } from '@/views/Users'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/users')({
	component: Users,
})
