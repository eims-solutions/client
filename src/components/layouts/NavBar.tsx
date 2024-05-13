import MobileSidebar from '@/components/layouts/MobileSidebar'
import { NavLinks } from '@/components/layouts/NavLinks'
import UserNav from '@/components/layouts/UserNav'
import { useNavLinks } from '@/hooks/useNavLinks'
import { Link, useLocation } from '@tanstack/react-router'
import { Package2 } from 'lucide-react'

export function NavBar() {
	const links = useNavLinks('transition-colors hover:text-foreground')
	const pathname = useLocation({
		select: location => location.href,
	})

	return (
		<header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
			<nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
				<Link
					href='#'
					className='flex items-center gap-2 text-lg font-semibold md:text-base'>
					{/* TODO: change the icon component below */}
					<Package2 className='h-6 w-6' />
					<span className='sr-only'>Acme Inc</span>
				</Link>

				<NavLinks
					navLinks={links}
					pathUrl={pathname}
					activeClassName='text-foreground'
					inActiveClassName='text-muted-foreground'
				/>
			</nav>
			<MobileSidebar />
			<UserNav />
		</header>
	)
}
