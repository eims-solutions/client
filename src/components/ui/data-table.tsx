import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table'
// import { ScrollArea, ScrollBar } from './scroll-area'
import { cn } from '@/utils/cn'
import { ChevronLeftIcon, ChevronRightIcon, Loader2 } from 'lucide-react'
import { Button } from './button'
import { ScrollArea, ScrollBar } from './scroll-area'
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

	return (
		<>
			{/* <ScrollArea className='rounded-md border h-[calc(80vh-220px)]'> */}
			{isLoading ? (
				<div className={cn('flex items-center justify-center h-64')}>
					<Loader2 className={cn('h-10 w-10 animate-spin')} />
				</div>
			) : (
				<div className={cn('rounded border')}>
					<ScrollArea
						className={cn('overflow-y-scroll max-h-[calc(80vh-220px)]')}>
						<Table className={cn('relative')}>
							<TableHeader>
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
							<TableBody>
								{table.getRowModel().rows?.length ? (
									table.getRowModel().rows.map(row => (
										<TableRow
											key={row.id}
											data-state={row.getIsSelected() && 'selected'}>
											{row.getVisibleCells().map(cell => (
												<TableCell key={cell.id}>
													{flexRender(
														cell.column.columnDef.cell,
														cell.getContext()
													)}
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
						</Table>
						<ScrollBar orientation='horizontal' />
					</ScrollArea>
				</div>
			)}
			{/* <ScrollBar orientation='horizontal' />
			</ScrollArea> */}
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
