import axios, {
	AxiosError,
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
} from 'axios'

const sleep = (ms = 500) => {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export async function request<T>(
	client: AxiosInstance,
	options: AxiosRequestConfig,
	processData?: (response: AxiosResponse) => T
) {
	const onSuccess = async (response: AxiosResponse) => {
		const { data } = response

		if (processData) {
			return processData(response)
		}

		await sleep()

		return data
	}

	const onError = (error: AxiosError | Error) => {
		if (axios.isAxiosError(error)) {
			console.log(error.response)
			return Promise.reject(error.response)
		}

		console.log(error.message)
		return Promise.reject(error.message)
	}

	return client(options).then(onSuccess).catch(onError)
}
