import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/teams')({
	component: () => <div>Teams</div>,
})
