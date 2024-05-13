import { NavLink } from '@/types/NavLink'
import { cn } from '@/utils/cn'
import { Link } from '@tanstack/react-router'

interface NavLinksProps {
	navLinks: NavLink[]
	pathUrl: string
	activeClassName: string
	inActiveClassName: string
}

export function NavLinks({
	navLinks,
	pathUrl,
	activeClassName,
	inActiveClassName,
}: NavLinksProps) {
	return (
		<>
			{navLinks.map(navLink => {
				const linkActiveClassName =
					pathUrl === navLink.href ? activeClassName : inActiveClassName

				return (
					<Link
						key={navLink.href}
						to={navLink.href}
						className={cn(navLink.className, linkActiveClassName)}>
						{navLink.title}
					</Link>
				)
			})}
		</>
	)
}
