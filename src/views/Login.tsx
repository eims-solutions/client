import { LoginForm } from '@/components/features/LoginForm'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { cn } from '@/utils/cn'

export function Login() {
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
