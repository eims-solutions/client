import { useFetchEventsService } from '@/services/useFetchEventsService'
import { useApiRequest } from './useApiRequest'
import { useQuery } from '@tanstack/react-query'

export function useFetchEvents() {
	const { apiUrl } = useApiRequest()
	const { fetchEventsAPI } = useFetchEventsService()

	return useQuery({
		queryKey: ['fetch-events', apiUrl.server],
		queryFn: () =>
			fetchEventsAPI({
				options: {
					baseURL: apiUrl.server,
					endpoint: '/api/events',
					method: 'GET',
				},
			}),
		staleTime: 1000 * 5,
		// refetchInterval: 1000 * 5,
	})
}
