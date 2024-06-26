import { CircleUser } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { useLogout } from '@/hooks/useLogout'

export default function UserNav() {
	const { onLogout } = useLogout()

	const handleOnClickLogout = () => {
		onLogout()
	}

	return (
		<div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
			<form className='ml-auto flex-1 sm:flex-initial'>
				<div className='relative'>
					{/* <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
						<Input
							type='search'
							placeholder='Search products...'
							className='pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]'
						/> */}
				</div>
			</form>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='secondary' size='icon' className='rounded-full'>
						<CircleUser className='h-5 w-5' />
						<span className='sr-only'>Toggle user menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Settings</DropdownMenuItem>
					<DropdownMenuItem>Support</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={handleOnClickLogout}>
						Logout
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
