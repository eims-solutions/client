import { LoginForm } from '@/components/features/LoginForm'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { useAuthStore } from '@/stores/useAuthStore'
import { cn } from '@/utils/cn'
import { useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'

export function Login() {
	const navigate = useNavigate()
	const token = useAuthStore(state => state.token)

	useEffect(() => {
		if (token) {
			navigate({ to: '/dashboard' })
		}
	}, [navigate, token])

	return (
		<div className={cn('container flex justify-center items-center h-screen')}>
			<Card className={cn('mx-auto max-w-sm')}>
				<CardHeader className={cn('space-y-1')}>
					<div className={cn('flex justify-between mb-4')}>
						<CardTitle className='text-2xl font-bold'>Login</CardTitle>
						{/* <ModeToggle /> */}
					</div>
					<CardDescription>
						Enter your email and password to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<LoginForm />
				</CardContent>
			</Card>
		</div>
	)
}
