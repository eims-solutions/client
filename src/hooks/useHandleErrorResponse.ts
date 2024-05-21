import { useAuthStore } from '@/stores/useAuthStore'
import { AxiosResponse, HttpStatusCode } from 'axios'

export function useHandleErrorResponse() {
	const setToken = useAuthStore(state => state.setToken)

	return (error: AxiosResponse) => {
		const { status } = error

		switch (true) {
			case status === HttpStatusCode.Unauthorized:
				setToken('')
				window.location.href = '/login'
				break
			default:
				console.error('error', error)
				break
		}
	}
}
