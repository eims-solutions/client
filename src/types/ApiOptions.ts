export interface ApiOptions {
	baseURL: string | ''
	endpoint: string | ''
	method: 'GET' | 'POST' | 'PUT' | 'DELETE'
	customHeaders?: Record<string, string>
}
