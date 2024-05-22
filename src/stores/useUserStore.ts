import { User } from '@/types/User'
import { create } from 'zustand'

interface UserStoreProps {
	users: User[]
	page: number
	totalPages: number
	setUsers: (users: User[]) => void
	setPage: (page: number) => void
	setTotalPages: (totalPages: number) => void
}

export const useUserStore = create<UserStoreProps>(set => ({
	users: [],
	page: 1,
	totalPages: 1,
	setUsers: (users: User[]) => set({ users }),
	setPage: (page: number) => set({ page }),
	setTotalPages: (totalPages: number) => set({ totalPages }),
}))
