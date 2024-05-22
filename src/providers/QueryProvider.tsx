import { useHandleErrorResponse } from '@/hooks/useHandleErrorResponse'
import {
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { PropsWithChildren, useState } from 'react'

type QueryProviderProps = PropsWithChildren

export function QueryProvider({ children }: QueryProviderProps) {
	const handleErrorResponse = useHandleErrorResponse()

	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						// refetchOnWindowFocus: 'always', // set to false to disable
						refetchOnWindowFocus: false,
						retry: false,
					},
				},
				queryCache: new QueryCache({
					onError: (error: Error) => {
						const err = error as unknown as AxiosResponse

						handleErrorResponse(err)
					},
				}),
			})
	)

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
