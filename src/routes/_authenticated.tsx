import { NavBar } from '@/components/layouts/NavBar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
	component: Authenticated,
})

function Authenticated() {
	// TODO: Implement the authenticated layout logic
	// If not authenticated, redirect to login

	return (
		<div className='flex min-h-screen w-full flex-col'>
			<NavBar />
			<main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
				<Outlet />
			</main>
		</div>
	)
}
