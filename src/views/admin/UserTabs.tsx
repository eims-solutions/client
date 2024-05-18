import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Students } from './Students'
import { Users } from './Users'

export function UserTabs() {
	return (
		<div>
			<Tabs defaultValue='users'>
				<TabsList>
					<TabsTrigger value='users'>Users</TabsTrigger>
					<TabsTrigger value='students'>Students</TabsTrigger>
				</TabsList>
				<TabsContent value='users'>
					<Users />
				</TabsContent>
				<TabsContent value='students'>
					<Students />
				</TabsContent>
			</Tabs>
		</div>
	)
}
