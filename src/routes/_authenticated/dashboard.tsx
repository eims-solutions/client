import { Dashboard } from '@/views/Dashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard')({
	component: Dashboard,
})
