import { useLogoutService } from "@/services/useLogoutService";
import { useApiRequest } from "./useApiRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/useAuthStore";
import { useNavigate } from "@tanstack/react-router";

export function useLogout() {
  const { apiUrl } = useApiRequest()
  const { logoutApi } = useLogoutService()
  const queryClient = useQueryClient()
  const setToken = useAuthStore(state => state.setToken)
  const navigate = useNavigate()

  const { mutate: logout, ...rest } = useMutation({
    mutationKey: ['logout'],
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.invalidateQueries()
      setToken('')
      navigate({ to:'/login' })
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const onLogout = () => {
    logout({
      options: {
        baseURL: apiUrl.server,
        endpoint: '/api/logout',
        method: 'POST'
      }
    })
  }

  return {
    onLogout,
    ...rest,
  }
}