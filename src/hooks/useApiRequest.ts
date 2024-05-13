import { getApiUrl } from '@/utils/getApiUrl'
import { request } from '@/utils/request'
import axios, { ResponseType } from 'axios'

export function useApiRequest() {
	const hostname = window.location.hostname
	const apiUrl = getApiUrl(hostname)

	const apiRequest = <Params = unknown, Data = unknown>(
		baseURL: string,
		url: string,
		method: string,
		customHeaders: Record<string, string> = {},
		params?: Params,
		data?: Data,
		responseType?: ResponseType
	) => {
		const defaultHeaders = {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		}

		const headers = {
			...defaultHeaders,
			...customHeaders,
		}

		const client = axios.create({
			baseURL,
			responseType,
			withCredentials: true,
		})

		return request(client, { headers, url, method, params, data })
	}

	return {
		apiRequest,
		apiUrl,
	}
}
