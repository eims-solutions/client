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
	const totalPages = useUserStore(state => state.totalPages)
	const setUsers = useUserStore(state => state.setUsers)
	const setPage = useUserStore(state => state.setPage)
	const setTotalPages = useUserStore(state => state.setTotalPages)
	const columns = useUserTableColumns()

	const loading = isLoading || isRefetching || isFetching

	useEffect(() => {
		if (isSuccess) {
			setUsers(data.data)
			setTotalPages(data.meta.last_page)
		}
	}, [data, isSuccess, setTotalPages, setUsers])

	const onPaginationChange = (e: PaginationConfig) => {
		setPage(e.current)
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
				pagination={{ current: page, pageSize: totalPages }}
				onPaginationChange={onPaginationChange}
			/>
		</>
	)
}
