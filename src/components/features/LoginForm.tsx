import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Paragraph } from '@/components/ui/typography'
import { useLoginCredentials } from '@/hooks/useLoginCredentials'
import { LoginFormSchema } from '@/types/LoginFormSchema'
import { cn } from '@/utils/cn'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function LoginForm() {
	const form = useForm<z.infer<typeof LoginFormSchema>>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			email: '',
			password: '',
			token: 'web',
		},
	})

	const { onLoginSubmit, isPending, isError, isSuccess } = useLoginCredentials()

	useEffect(() => {
		if (isSuccess) {
			console.log('Login success')
		}
	}, [isSuccess])

	const onSubmit = (values: z.infer<typeof LoginFormSchema>) => {
		const payload = { ...values }
		onLoginSubmit(payload)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} autoComplete='false'>
				<div className={cn('space-y-4')}>
					<div className={cn('space-y-2')}>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder='m@example.com' {...field} required />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className={cn('space-y-2')}>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											placeholder='password'
											{...field}
											type='password'
											required
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					{isError && (
						<Paragraph className={cn('text-sm font-medium text-destructive')}>
							Invalid credentials
						</Paragraph>
					)}
					<Button className={cn('w-full')} type='submit' loading={isPending}>
						Login
					</Button>
				</div>
			</form>
		</Form>
	)
}
