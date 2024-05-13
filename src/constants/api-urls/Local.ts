import { ApiUrl } from '@/types/ApiUrl'
import { env } from '@/utils/env'

export const Local: ApiUrl = {
	server: env.VITE_API_URL,
} as const
