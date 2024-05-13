import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren, useState } from 'react'

type QueryProviderProps = PropsWithChildren

export function QueryProvider({ children }: QueryProviderProps) {
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
				// queryCache: new QueryCache({}),
			})
	)

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
