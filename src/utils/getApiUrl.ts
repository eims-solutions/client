import { CLIENT_URL } from '@/constants/ClientUrl'
import { Local } from '@/constants/api-urls/Local'

export function getApiUrl(hostname: string) {
	if (hostname === CLIENT_URL.DEV) {
		return null
	}

	return Local
}
