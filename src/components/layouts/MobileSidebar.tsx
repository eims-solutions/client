import { NavLinks } from '@/components/layouts/NavLinks'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useNavLinks } from '@/hooks/useNavLinks'
import { Link, useLocation } from '@tanstack/react-router'
import { Menu, Package2 } from 'lucide-react'

export default function MobileSidebar() {
	const links = useNavLinks('hover:text-foreground')
	const pathname = useLocation({
		select: location => location.href,
	})

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='outline' size='icon' className='shrink-0 md:hidden'>
					<Menu className='h-5 w-5' />
					<span className='sr-only'>Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side='left'>
				<nav className='grid gap-6 text-lg font-medium'>
					<Link
						href='#'
						className='flex items-center gap-2 text-lg font-semibold'>
						{/* TODO: change the icon component below */}
						<Package2 className='h-6 w-6' />
						<span className='sr-only'>Acme Inc</span>
					</Link>

					<NavLinks
						navLinks={links}
						pathUrl={pathname}
						activeClassName=''
						inActiveClassName='text-muted-foreground'
					/>
				</nav>
			</SheetContent>
		</Sheet>
	)
}
