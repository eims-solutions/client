import { Login } from '@/views/Login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
	component: Login,
})
