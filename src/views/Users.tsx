import { Button } from '@/components/ui/button'
import { DataTable, PaginationConfig } from '@/components/ui/data-table'
import { useFetchUsers } from '@/hooks/useFetchUsers'
import { useUserTableColumns } from '@/hooks/useUserTableColumns'
import { useUserStore } from '@/stores/useUserStore'
import { useEffect } from 'react'

export function Users() {
	const { data, isLoading, isRefetching, isFetching, isSuccess } =
		useFetchUsers()
	const users = useUserStore(state => state.users)
	const page = useUserStore(state => state.page)
	const perPage = useUserStore(state => state.perPage)
	const totalPages = useUserStore(state => state.totalPages)
	const setUsers = useUserStore(state => state.setUsers)
	const setPage = useUserStore(state => state.setPage)
	const setPerPage = useUserStore(state => state.setPerPage)
	const setTotalPages = useUserStore(state => state.setTotalPages)
	const columns = useUserTableColumns()

	const loading = isLoading || isRefetching || isFetching

	useEffect(() => {
		if (isSuccess) {
			setUsers(data.data)
			setPerPage(data.meta.per_page)
			setTotalPages(data.meta.last_page)
		}
	}, [data, isSuccess, setPerPage, setTotalPages, setUsers])

	const onPaginationChange = (e: PaginationConfig) => {
		setPage(e.current)
		setPerPage(e.perPage ?? 0)
	}

	return (
		<>
			<div className='flex justify-end'>
				<Button>Add Users</Button>
			</div>
			<DataTable
				columns={columns}
				data={users}
				isLoading={loading}
				pagination={{
					totalPages,
					perPage,
					current: page,
					showPageSizeOptions: true,
				}}
				pageSizeOptions={[10, 20, 50, 100]}
				onPaginationChange={onPaginationChange}
			/>
		</>
	)
}
