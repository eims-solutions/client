import { Card } from '@/components/ui/card'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

const students = [
	{
		student_id: '1',
		first_name: 'Dante',
		middle_name: 'L',
		last_name: 'Diablo',
		grade_level: '9',
		section: 'Emerald',
	},
	{
		student_id: '2',
		first_name: 'Dante',
		middle_name: 'L',
		last_name: 'Diablo',
		grade_level: '9',
		section: 'Emerald',
	},
	{
		student_id: '3',
		first_name: 'Dante',
		middle_name: 'L',
		last_name: 'Diablo',
		grade_level: '9',
		section: 'Emerald',
	},
	{
		student_id: '4',
		first_name: 'Dante',
		middle_name: 'L',
		last_name: 'Diablo',
		grade_level: '9',
		section: 'Emerald',
	},
	{
		student_id: '5',
		first_name: 'Dante',
		middle_name: 'L',
		last_name: 'Diablo',
		grade_level: '9',
		section: 'Emerald',
	},
	{
		student_id: '6',
		first_name: 'Dante',
		middle_name: 'L',
		last_name: 'Diablo',
		grade_level: '9',
		section: 'Emerald',
	},
	{
		student_id: '7',
		first_name: 'Dante',
		middle_name: 'L',
		last_name: 'Diablo',
		grade_level: '9',
		section: 'Emerald',
	},
	{
		student_id: '8',
		first_name: 'Dante',
		middle_name: 'L',
		last_name: 'Diablo',
		grade_level: '9',
		section: 'Emerald',
	},
]
export function Students() {
	return (
		<div>
			<Card x-chunk='dashboard-07-chunk-2'>
				<Table>
					<TableCaption>A list of students.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className='w-[100px]'>Student ID</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Grade Level</TableHead>
							<TableHead>Section</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{students.map(students => (
							<TableRow key={students.student_id}>
								<TableCell className='font-medium'>
									{students.student_id}
								</TableCell>
								<TableCell>
									{students.first_name} {students.middle_name}{' '}
									{students.last_name}
								</TableCell>
								<TableCell>{students.grade_level}</TableCell>
								<TableCell>{students.section}</TableCell>
							</TableRow>
						))}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableCell colSpan={3}>Total</TableCell>
							<TableCell>{students.length}</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</Card>
		</div>
	)
}
