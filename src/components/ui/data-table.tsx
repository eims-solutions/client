import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table'
import { cn } from '@/utils/cn'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Button } from './button'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from './table'

export type PaginationConfig = {
	current: number
	pageSize: number
}

type DataTableProps<TData, TValue> = {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
	// pageSizeOptions?: number[]
	isLoading?: boolean
	pagination: PaginationConfig
	onPaginationChange: (e: PaginationConfig) => void
}

export function DataTable<TData, TValue>({
	columns,
	data,
	// pageSizeOptions = [10, 25, 50, 100],
	isLoading,
	pagination,
	onPaginationChange,
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		manualPagination: true,
		getCoreRowModel: getCoreRowModel(),
	})

	const renderTableBody = () => {
		if (isLoading) {
			return (
				<TableRow>
					<TableCell colSpan={columns.length} className='h-24 text-center'>
						Loading...
					</TableCell>
				</TableRow>
			)
		}

		if (table.getRowModel().rows?.length) {
			return table.getRowModel().rows.map(row => (
				<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
					{row.getVisibleCells().map(cell => (
						<TableCell key={cell.id}>
							{flexRender(cell.column.columnDef.cell, cell.getContext())}
						</TableCell>
					))}
				</TableRow>
			))
		}

		return (
			<TableRow>
				<TableCell colSpan={columns.length} className={cn('h-24 text-center')}>
					No results.
				</TableCell>
			</TableRow>
		)
	}

	return (
		<>
			<div className='w-full'>
				<div className='rounded border'>
					<div className='max-h-[calc(90vh-220px)] relative overflow-auto'>
						<Table>
							<TableHeader className='sticky top-0 bg-secondary'>
								{table.getHeaderGroups().map(headerGroup => (
									<TableRow key={headerGroup.id}>
										{headerGroup.headers.map(header => {
											return (
												<TableHead key={header.id}>
													{header.isPlaceholder
														? null
														: flexRender(
																header.column.columnDef.header,
																header.getContext()
															)}
												</TableHead>
											)
										})}
									</TableRow>
								))}
							</TableHeader>
							<TableBody>{renderTableBody()}</TableBody>
						</Table>
					</div>
				</div>
			</div>
			<div
				className={cn(
					'flex flex-col gap-2 sm:flex-row items-center justify-end space-x-2 py-4'
				)}>
				<div className={cn('flex items-center justify-between w-full')}>
					{/* <div className={cn('flex-1 text-sm text-muted-foreground')}>
						{table.getFilteredSelectedRowModel().rows.length} of{' '}
						{table.getFilteredRowModel().rows.length} row(s) selected.
					</div> */}
					{/* <div className='flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8'>
						<div className='flex items-center space-x-2'>
							<p className='whitespace-nowrap text-sm font-medium'>
								Rows per page
							</p>
							<Select
								value={`${table.getState().pagination.pageSize}`}
								onValueChange={value => {
									table.setPageSize(Number(value))
								}}>
								<SelectTrigger className='h-8 w-[70px]'>
									<SelectValue
										placeholder={table.getState().pagination.pageSize}
									/>
								</SelectTrigger>
								<SelectContent side='top'>
									{pageSizeOptions.map(pageSize => (
										<SelectItem key={pageSize} value={`${pageSize}`}>
											{pageSize}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div> */}
				</div>
				<div
					className={cn(
						'flex items-center justify-between sm:justify-end gap-2 w-full'
					)}>
					<div
						className={cn(
							'flex w-[100px] items-center justify-center text-sm font-medium'
						)}>
						Page {pagination.current} of {pagination.pageSize}
					</div>
					<div className={cn('flex items-center space-x-2')}>
						{/* <Button
							aria-label='Go to first page'
							variant='outline'
							className='hidden h-8 w-8 p-0 lg:flex'
							onClick={() => table.setPageIndex(0)}
							disabled={!table.getCanPreviousPage()}>
							<DoubleArrowLeftIcon className='h-4 w-4' aria-hidden='true' />
						</Button> */}
						<Button
							aria-label='Go to previous page'
							variant='outline'
							className={cn('h-8 w-8 p-0')}
							onClick={() =>
								onPaginationChange({
									current: pagination.current - 1,
									pageSize: pagination.pageSize,
								})
							}
							disabled={pagination.current === 1}>
							<ChevronLeftIcon className='h-4 w-4' aria-hidden='true' />
						</Button>
						<Button
							aria-label='Go to next page'
							variant='outline'
							className={cn('h-8 w-8 p-0')}
							onClick={() =>
								onPaginationChange({
									current: pagination.current + 1,
									pageSize: pagination.pageSize,
								})
							}
							disabled={pagination.current === pagination.pageSize}>
							<ChevronRightIcon className='h-4 w-4' aria-hidden='true' />
						</Button>
						{/* <Button
							aria-label='Go to last page'
							variant='outline'
							className='hidden h-8 w-8 p-0 lg:flex'
							onClick={() => table.setPageIndex(table.getPageCount() - 1)}
							disabled={!table.getCanNextPage()}>
							<DoubleArrowRightIcon className='h-4 w-4' aria-hidden='true' />
						</Button> */}
					</div>
				</div>
			</div>
		</>
	)
}
