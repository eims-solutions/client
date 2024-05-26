import { useApiRequest } from '@/hooks/useApiRequest'
import { ApiBaseProps } from '@/types/ApiBaseProps'
import { ApiOptions } from '@/types/ApiOptions'
import { PaginationResponse } from '@/types/PaginationResponse'
import { User } from '@/types/User'

interface FetchUsersParams {
	page?: number
	per_page?: number
}

export function useFetchUserService() {
	const { apiRequest } = useApiRequest()

	const fetchUserAPI = (
		props: ApiBaseProps<FetchUsersParams, void, ApiOptions>
	): Promise<PaginationResponse<User>> =>
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
