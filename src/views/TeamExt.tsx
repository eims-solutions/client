import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

export function TeamExt() {
	return (
		<div>
			<Table>
				<TableCaption>A list of teams.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className='w-[100px]'>Logo</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Leader</TableHead>
						<TableHead className='text-right'>Points</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className='font-medium'>TEA001</TableCell>
						<TableCell>Team Bangan</TableCell>
						<TableCell>Riiiīdā</TableCell>
						<TableCell className='text-right'>
							50 thousand hunder million dollar pesos points
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	)
}
