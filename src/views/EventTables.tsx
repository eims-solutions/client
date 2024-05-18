import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	// TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

import { useFetchEvents } from '@/hooks/useFetchEvents'

// const invoices = [
// 	{
// 		invoice: 'INV001',
// 		paymentStatus: 'Paid',
// 		totalAmount: '$250.00',
// 		paymentMethod: 'Credit Card',
// 	},
// 	{
// 		invoice: 'INV002',
// 		paymentStatus: 'Pending',
// 		totalAmount: '$150.00',
// 		paymentMethod: 'PayPal',
// 	},
// 	{
// 		invoice: 'INV003',
// 		paymentStatus: 'Unpaid',
// 		totalAmount: '$350.00',
// 		paymentMethod: 'Bank Transfer',
// 	},
// 	{
// 		invoice: 'INV004',
// 		paymentStatus: 'Paid',
// 		totalAmount: '$450.00',
// 		paymentMethod: 'Credit Card',
// 	},
// 	{
// 		invoice: 'INV005',
// 		paymentStatus: 'Paid',
// 		totalAmount: '$550.00',
// 		paymentMethod: 'PayPal',
// 	},
// 	{
// 		invoice: 'INV006',
// 		paymentStatus: 'Pending',
// 		totalAmount: '$200.00',
// 		paymentMethod: 'Bank Transfer',
// 	},
// 	{
// 		invoice: 'INV007',
// 		paymentStatus: 'Unpaid',
// 		totalAmount: '$300.00',
// 		paymentMethod: 'Credit Card',
// 	},
// ]
interface EventDataResponse {
	id: number
	event_name: string
	created_at: string
	updated_at: string
}

export function EventTables() {
	const { data, isSuccess } = useFetchEvents()
	const getData = (): EventDataResponse[] => {
		if (isSuccess) {
			return data.data
		}

		return []
	}
	return (
		<Table>
			<TableCaption>A list of events.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className='w-[100px]'>ID</TableHead>
					<TableHead>Event Name</TableHead>
					{/* <TableHead>Method</TableHead>
					<TableHead className='text-right'>Amount</TableHead> */}
				</TableRow>
			</TableHeader>
			<TableBody>
				{getData().map(item => {
					return (
						<TableRow key={item.id}>
							<TableCell className='font-medium'>{item.id}</TableCell>
							<TableCell className='font-medium'>{item.event_name}</TableCell>
							{/* <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className='text-right'>{invoice.totalAmount}</TableCell> */}
						</TableRow>
					)
				})}
			</TableBody>
			{/* <TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className='text-right'>$2,500.00</TableCell>
				</TableRow>
			</TableFooter> */}
		</Table>
	)
}
