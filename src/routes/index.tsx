import { LandingPage } from '@/components/public/LandingPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: () => (
		<div>
			<LandingPage />
		</div>
	),
})
