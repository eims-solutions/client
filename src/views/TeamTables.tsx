import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

import { useFetchTeams } from '@/hooks/useFetchTeams'

interface EventDataResponse {
	id: number
	team_name: string
	created_at: string
	updated_at: string
}

export function TeamTables() {
	const { data, isSuccess } = useFetchTeams()
	const getData = (): EventDataResponse[] => {
		if (isSuccess) {
			return data.data
		}

		return []
	}
	return (
		<Table>
			<TableCaption>A list of Teams.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className='w-[100px]'>ID</TableHead>
					<TableHead>Team Name</TableHead>
					<TableHead>Team Leader</TableHead>
					<TableHead>Points</TableHead>
					<TableHead>Created</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{getData().map(item => {
					return (
						<TableRow key={item.id}>
							<TableCell className='font-medium'>{item.id}</TableCell>
							<TableCell className='font-medium'>{item.team_name}</TableCell>
							<TableCell className='font-medium'>Display Team Leader Here</TableCell>
							<TableCell className='font-medium'>Display Points Here</TableCell>
							<TableCell className='font-medium'>{item.created_at}</TableCell>
						</TableRow>
					)
				})}
			</TableBody>
		</Table>
	)
}
