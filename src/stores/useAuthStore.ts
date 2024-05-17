import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthStore {
	token: string
	setToken: (token: string) => void
}

export const useAuthStore = create<AuthStore>()(
	persist(
		set => ({
			token: '',
			setToken: token => set({ token }),
		}),
		{
			name: 'auth-token',
		}
	)
)
