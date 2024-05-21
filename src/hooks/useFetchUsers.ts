import { useFetchUserService } from '@/services/useFetchUserService'
import { useApiRequest } from '@/hooks/useApiRequest'
import { useUserStore } from '@/stores/useUserStore'
import { useQuery } from '@tanstack/react-query'

export function useFetchUsers() {
	const { fetchUserAPI } = useFetchUserService()
	const { apiUrl } = useApiRequest()
	const page = useUserStore(state => state.page)

	return useQuery({
		queryKey: ['users', page, apiUrl.server],
		queryFn: () =>
			fetchUserAPI({
				options: {
					baseURL: apiUrl.server,
					endpoint: '/api/users',
					method: 'GET',
				},
				params: {
					page,
				},
			}),
		staleTime: 1000 * 60 * 5, // 5mins,
		refetchInterval: 1000 * 60 * 5, // 5mins
	})
}
