import { NavBar } from '@/components/layouts/NavBar'
import { useAuthStore } from '@/stores/useAuthStore'
import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/_authenticated')({
	component: Authenticated,
	beforeLoad: () => {},
})

function Authenticated() {
	const navigate = useNavigate()
	const token = useAuthStore(state => state.token)

	useEffect(() => {
		if (!token) {
			navigate({ to: '/login' })
		}
	}, [navigate, token])

	return (
		<div className='flex min-h-screen w-full flex-col'>
			<NavBar />
			<main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
				<Outlet />
			</main>
		</div>
	)
}
