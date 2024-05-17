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

const users = [
	{
		user_id: '1',
		first_name: 'Add',
		middle_name: 'Min',
		last_name: 'Admin',
		description: 'administrator',
		contact_number: '+0542885',
		email: 'admin@admin.com',
		role: 'admin',
	},
	{
		user_id: '2',
		first_name: 'User',
		middle_name: 'Number',
		last_name: 'One',
		description: 'User 1',
		contact_number: '+0523748324',
		email: 'user1@gmail.com',
		role: 'Level 1 officer',
	},
	{
		user_id: '3',
		first_name: 'User',
		middle_name: 'Number',
		last_name: 'Two',
		description: 'User 2',
		contact_number: '+89276341',
		email: 'user2@gmail.com',
		role: 'Level 2 officer',
	},
	{
		user_id: '4',
		first_name: 'User',
		middle_name: 'Number',
		last_name: 'Three',
		description: 'User 3',
		contact_number: '+829543682',
		email: 'user3@gmail.com',
		role: 'Level 3 officer',
	},
]
export function Users() {
	return (
		<div>
			<Card x-chunk='dashboard-07-chunk-2'>
				<Table>
					<TableCaption>A list of users.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className='w-[100px]'>User ID</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Description</TableHead>
							<TableHead>Contact Number</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Role</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.map(users => (
							<TableRow key={users.user_id}>
								<TableCell className='font-medium'>{users.user_id}</TableCell>
								<TableCell>
									{users.first_name} {users.middle_name} {users.last_name}
								</TableCell>
								<TableCell>{users.description}</TableCell>
								<TableCell>{users.contact_number}</TableCell>
								<TableCell>{users.email}</TableCell>
								<TableCell>{users.role}</TableCell>
							</TableRow>
						))}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableCell colSpan={5}>Total</TableCell>
							<TableCell className='text-left'>{users.length}</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</Card>
		</div>
	)
}
