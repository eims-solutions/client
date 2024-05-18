import { UserTabs } from '@/views/admin/UserTabs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/admin/individuals')({
	component: UserTabs,
})
