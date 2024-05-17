import { NavLink } from '@/types/NavLink'
import { useMemo } from 'react'

export function useNavLinks(className: string) {
	const links = useMemo<NavLink[]>(
		() => [
			{
				title: 'Dashboard',
				href: '/dashboard',
				className,
			},
			{
				title: 'Events',
				href: '/events',
				className,
			},
			{
				title: 'Teams',
				href: '/teams',
				className,
			},
			{
				title: 'Individuals',
				href: '/admin/individuals',
				className,
			},
		],
		[className]
	)

	return links
}
