import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { QueryProvider } from './providers/QueryProvider'

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(
		<StrictMode>
			<QueryProvider>
				<App />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryProvider>
		</StrictMode>
	)
}
