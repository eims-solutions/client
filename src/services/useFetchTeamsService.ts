import { useApiRequest } from '@/hooks/useApiRequest'
import { ApiBaseProps } from '@/types/ApiBaseProps'
import { ApiOptions } from '@/types/ApiOptions'

interface ApiParams {
	page?: number
}

export function useFetchTeamsService() {
	const { apiRequest } = useApiRequest()

	const fetchTeamsAPI = (props: ApiBaseProps<ApiParams, void, ApiOptions>) => {
		return apiRequest(
			props.options.baseURL,
			props.options.endpoint,
			props.options.method,
			props.options.customHeaders,
			props.params,
			props.data
		)
	}

	return { fetchTeamsAPI }
}
