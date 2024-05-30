import { useFetchTeamsService } from '@/services/useFetchTeamsService'
import { useApiRequest } from './useApiRequest'
import { useQuery } from '@tanstack/react-query'

export function useFetchTeams() {
	const { apiUrl } = useApiRequest()
	const { fetchTeamsAPI } = useFetchTeamsService()

	return useQuery({
		queryKey: ['fetch-team', apiUrl.server],
		queryFn: () =>
			fetchTeamsAPI({
				options: {
					baseURL: apiUrl.server,
					endpoint: '/api/teams',
					method: 'GET',
				},
			}),
		staleTime: 1000 * 5,
		refetchInterval: 1000 * 5,
	})
}
