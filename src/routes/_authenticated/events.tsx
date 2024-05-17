import { Events } from '@/views/Events'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/events')({
	component: Events,
})
