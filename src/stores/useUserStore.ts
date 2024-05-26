import { User } from '@/types/User'
import { create } from 'zustand'

interface UserStoreProps {
	users: User[]
	page: number
	perPage: number
	totalPages: number
	setUsers: (users: User[]) => void
	setPage: (page: number) => void
	setPerPage: (perPage: number) => void
	setTotalPages: (totalPages: number) => void
}

export const useUserStore = create<UserStoreProps>(set => ({
	users: [],
	page: 1,
	perPage: 20,
	totalPages: 1,
	setUsers: (users: User[]) => set({ users }),
	setPage: (page: number) => set({ page }),
	setPerPage: (perPage: number) => set({ perPage }),
	setTotalPages: (totalPages: number) => set({ totalPages }),
}))
