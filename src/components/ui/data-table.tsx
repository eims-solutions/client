import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { cn } from '@/utils/cn'
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useMemo } from 'react'

export type PaginationConfig = {
	current: number
	totalPages: number
	showPageSizeOptions?: boolean
	perPage?: number
}

export type DataTableProps<TData, TValue> = {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
	pageSizeOptions?: number[]
	isLoading?: boolean
	pagination: PaginationConfig
	onPaginationChange: (e: PaginationConfig) => void
}

export function DataTable<TData, TValue>({
	columns,
	data,
	pageSizeOptions = [10, 25, 50, 100],
	isLoading,
	pagination,
	onPaginationChange,
}: DataTableProps<TData, TValue>) {
	const tableColumns = useMemo(() => {
		return isLoading
			? columns.map(column => ({
					...column,
					cell: () => <Skeleton className='w-[100px] h-[20px] rounded-full' />,
				}))
			: columns
	}, [columns, isLoading])

	const tableData = useMemo(() => {
		return isLoading ? Array(10).fill({}) : data
	}, [data, isLoading])

	const table = useReactTable({
		data: tableData,
		columns: tableColumns,
		manualPagination: true,
		getCoreRowModel: getCoreRowModel(),
	})

	return (
		<>
			<div className='w-full'>
				<div className='rounded border'>
					<div className='max-h-[calc(90vh-220px)] relative overflow-auto'>
						<Table>
							<DataTableHeader table={table} />
							<DataTableBody table={table} columns={columns} />
						</Table>
					</div>
				</div>
			</div>
			<DataTablePagination
				pagination={pagination}
				onPaginationChange={onPaginationChange}
				table={table}
				pageSizeOptions={pageSizeOptions}
				isLoading={isLoading}
			/>
		</>
	)
}

export type DataTableHeaderProps = {
	table: ReturnType<typeof useReactTable>
}

export function DataTableHeader({ table }: DataTableHeaderProps) {
	return (
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
	)
}

export type DataTableBodyProps<TData, TValue> = {
	columns: ColumnDef<TData, TValue>[]
	table: ReturnType<typeof useReactTable>
}

export function DataTableBody<TData, TValue>({
	table,
	columns,
}: DataTableBodyProps<TData, TValue>) {
	return (
		<TableBody>
			{table.getRowModel().rows?.length ? (
				table.getRowModel().rows.map(row => (
					<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
						{row.getVisibleCells().map(cell => (
							<TableCell key={cell.id}>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</TableCell>
						))}
					</TableRow>
				))
			) : (
				<TableRow>
					<TableCell
						colSpan={columns.length}
						className={cn('h-24 text-center')}>
						No results.
					</TableCell>
				</TableRow>
			)}
		</TableBody>
	)
}

export type DataTablePaginationProps = {
	table: ReturnType<typeof useReactTable>
	pagination: PaginationConfig
	onPaginationChange: (e: PaginationConfig) => void
	pageSizeOptions: number[]
	isLoading?: boolean
}

export function DataTablePagination({
	table,
	pagination,
	onPaginationChange,
	pageSizeOptions,
	isLoading,
}: DataTablePaginationProps) {
	return (
		<div
			className={cn(
				'flex flex-col gap-2 sm:flex-row items-center justify-end space-x-2 py-4'
			)}>
			{/* <div className={cn('flex items-center justify-between w-full')}>
				<div className={cn('flex-1 text-sm text-muted-foreground')}>
					{table.getFilteredSelectedRowModel().rows.length} of{' '}
					{table.getFilteredRowModel().rows.length} row(s) selected.
				</div>
			</div> */}
			<div
				className={cn(
					'flex items-center justify-between sm:justify-end gap-2 w-full'
				)}>
				{pagination.showPageSizeOptions && (
					<div className='flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8'>
						<div className='flex items-center space-x-2'>
							{isLoading ? (
								<Skeleton className='h-8 w-36 rounded-full' />
							) : (
								<>
									<p className='whitespace-nowrap text-sm font-medium'>
										Rows per page
									</p>
									<Select
										value={`${pagination.perPage}`}
										onValueChange={value => {
											onPaginationChange({
												current: 1,
												totalPages: pagination.totalPages,
												perPage: Number(value),
											})
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
								</>
							)}
						</div>
					</div>
				)}
				{isLoading ? (
					<Skeleton className='h-8 w-36 rounded-full' />
				) : (
					<>
						<div
							className={cn(
								'flex w-[100px] items-center justify-center text-sm font-medium'
							)}>
							Page {pagination.current} of {pagination.totalPages}
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
										totalPages: pagination.totalPages,
										perPage: pagination.perPage,
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
										totalPages: pagination.totalPages,
										perPage: pagination.perPage,
									})
								}
								disabled={pagination.current === pagination.totalPages}>
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
					</>
				)}
			</div>
		</div>
	)
}
