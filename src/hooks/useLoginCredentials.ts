import { useApiRequest } from '@/hooks/useApiRequest'
import { useLoginService } from '@/services/useLoginService'
import { useAuthStore } from '@/stores/useAuthStore'
import { LoginFormSchema } from '@/types/LoginFormSchema'
import { LoginResponse } from '@/types/LoginResponse'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { AxiosError } from 'axios'
import { z } from 'zod'

export function useLoginCredentials() {
	const { apiUrl } = useApiRequest()
	const { loginAPI } = useLoginService()
	const queryClient = useQueryClient()
	const setToken = useAuthStore(state => state.setToken)
	const navigate = useNavigate()

	const { mutate: login, ...rest } = useMutation({
		mutationKey: ['login'],
		mutationFn: loginAPI,
		onSuccess: (response: LoginResponse) => {
			queryClient.invalidateQueries()
			setToken(response.token)
			navigate({ to: '/dashboard' })
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
