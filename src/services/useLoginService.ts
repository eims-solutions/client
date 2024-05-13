import { useApiRequest } from '@/hooks/useApiRequest'
import { ApiBaseProps } from '@/types/ApiBaseProps'
import { ApiOptions } from '@/types/ApiOptions'
import { z } from 'zod'
import { LoginFormSchema } from '@/types/LoginFormSchema'

export function useLoginService() {
	const { apiRequest } = useApiRequest()

	const loginAPI = (
		props: ApiBaseProps<void, z.infer<typeof LoginFormSchema>, ApiOptions>
	) =>
		apiRequest(
			props.options.baseURL,
			props.options.endpoint,
			props.options.method,
			props.options.customHeaders,
			props.params,
			props.data
		)

	return { loginAPI }
}
