import { Badge } from '@/components/ui/badge'
import { User } from '@/types/User'
import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'

export function useUserTableColumns() {
	return useMemo(() => {
		const columnDef: ColumnDef<User>[] = [
			{
				accessorKey: 'first_name',
				header: 'First Name',
			},
			{
				accessorKey: 'middle_name',
				header: 'Middle Name',
			},
			{
				accessorKey: 'last_name',
				header: 'Last Name',
			},
			{
				accessorKey: 'email',
				header: 'Email',
			},
			{
				accessorKey: 'contact',
				header: 'Contact',
			},
			{
				accessorKey: 'roles',
				header: 'Roles',
				cell: ({ row }) => {
					return (
						<div>
							{row.original.roles.map(role => (
								<Badge key={role.id} variant='default' className='m-1'>
									<span>{role.name}</span>
								</Badge>
							))}
						</div>
					)
				},
			},
		]

		return columnDef
	}, [])
}
