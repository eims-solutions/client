import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

import { Label } from '@/components/ui/label'

import { EventTables } from './EventTables'
// import { useFetchEvents } from '@/hooks/useFetchEvents'

// interface EventDataResponse {
// 	id: number
// 	event_name: string
// 	created_at: string
// 	updated_at: string
// }

export function Events() {
	// const { data, isSuccess, isLoading, isFetching, isPending, isRefetching } =
	// 	useFetchEvents()

	// const loading = isLoading || isFetching || isPending || isRefetching

	// const getData = (): EventDataResponse[] => {
	// 	if (isSuccess) {
	// 		return data.data
	// 	}

	// 	return []
	// }

	// if (loading) {
	// 	return <p>Loading...</p>
	// }

	return (
		<div>
			<Card x-chunk='dashboard-07-chunk-2'>
				<CardHeader>
					<CardTitle>Filter by:</CardTitle>
				</CardHeader>
				<CardContent>
					<div className='grid gap-6 sm:grid-cols-3'>
						<div className='grid gap-3'>
							<Label htmlFor='event'>Events</Label>
							<Select defaultValue='all'>
								<SelectTrigger id='event' aria-label='Select event'>
									<SelectValue placeholder='Select event' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='all'>All events</SelectItem>
									<SelectItem value='major'>Major events</SelectItem>
									<SelectItem value='minor'>Minor events</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className='grid gap-3'>
							<Label htmlFor='category'>Category</Label>
							<Select defaultValue='all'>
								<SelectTrigger id='category' aria-label='Select category'>
									<SelectValue placeholder='Select category' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='all'>All categories</SelectItem>
									<SelectItem value='male'>Male category</SelectItem>
									<SelectItem value='female'>Female category</SelectItem>
									<SelectItem value='mixed'>Mixed category</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className='grid gap-3'>
							<Label htmlFor='division'>Division</Label>
							<Select defaultValue='all'>
								<SelectTrigger id='division' aria-label='Select division'>
									<SelectValue placeholder='Select division' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='all'>All divisions</SelectItem>
									<SelectItem value='junior'>Junior Division</SelectItem>
									<SelectItem value='senior'>Senior Division</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<br />
					<EventTables />
				</CardContent>
			</Card>

			{/* {data.data.map((item: { id: number; event_name: string }) => {
				return <p key={item.id}>{item.event_name}</p>
			})} */}
			{/* {data.data.map((item: EventDataResponse) => {
				return <p key={item.id}>{item.event_name}</p>
			})} */}
		</div>
	)
}
