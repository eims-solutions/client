import { useApiRequest } from '@/hooks/useApiRequest'
import { ApiBaseProps } from '@/types/ApiBaseProps'
import { ApiOptions } from '@/types/ApiOptions'

interface FetchUsersParams {
	page?: number
}

export function useFetchUserService() {
	const { apiRequest } = useApiRequest()

	const fetchUserAPI = (
		props: ApiBaseProps<FetchUsersParams, void, ApiOptions>
	) =>
		apiRequest(
			props.options.baseURL,
			props.options.endpoint,
			props.options.method,
			props.options.customHeaders,
			props.params,
			props.data
		)

	return { fetchUserAPI }
}
