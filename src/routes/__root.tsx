import { RouterDevToolsProvider } from '@/providers/RouterDevToolsProvider'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Suspense } from 'react'

export const Route = createRootRoute({
	component: RootRouteComponent,
})

function RootRouteComponent() {
	return (
		<>
			<Outlet />
			<Suspense>
				<RouterDevToolsProvider />
			</Suspense>
		</>
	)
}
