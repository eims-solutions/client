import { useApiRequest } from '@/hooks/useApiRequest'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useLoginService } from '@/services/useLoginService'
import { LoginFormSchema } from '@/types/LoginFormSchema'
import { LoginResponse } from '@/types/LoginResponse'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { z } from 'zod'

export function useLoginCredentials() {
	const { apiUrl } = useApiRequest()
	const { loginAPI } = useLoginService()
	const queryClient = useQueryClient()
	const { setItem } = useLocalStorage()

	const { mutate: login, ...rest } = useMutation({
		mutationKey: ['login'],
		mutationFn: loginAPI,
		onSuccess: (response: LoginResponse) => {
			queryClient.invalidateQueries()
			setItem('token', response.token)
		},
		onError: (error: AxiosError | Error) => {
			console.log(error)
		},
	})

	const onLoginSubmit = (data: z.infer<typeof LoginFormSchema>) => {
		login({
			options: {
				baseURL: apiUrl.server,
				endpoint: '/api/login',
				method: 'POST',
			},
			data,
		})
	}

	return {
		onLoginSubmit,
		...rest,
	}
}
