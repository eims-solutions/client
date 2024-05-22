import { useApiRequest } from '@/hooks/useApiRequest'
import { ApiBaseProps } from '@/types/ApiBaseProps'
import { ApiOptions } from '@/types/ApiOptions'

export function useLogoutService() {
  const {apiRequest} = useApiRequest()

  const logoutApi = (
    props: ApiBaseProps<void, void, ApiOptions>
  ) =>
    apiRequest(
      props.options.baseURL,
      props.options.endpoint,
      props.options.method,
      props.options.customHeaders,
      props.params,
      props.data
      )

  return { logoutApi }
}
