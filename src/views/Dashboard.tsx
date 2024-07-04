import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
// import { Activity, CreditCard,  Users } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Dashboard() {
	return (
		<div>
			<header className='sticky top-0 z-10 flex items-center gap-1 border-b bg-background px-4'>
				<h1 className='text-3xl font-semibold'>CeSA Days {`{Year}`}</h1>
			</header>
			<main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
				<div className='grid '>
					<Carousel>
						<CarouselContent>
							<CarouselItem className="md:basis-1/4 lg:basis-1/6">
								<Card x-chunk='dashboard-01-chunk-0'>
									<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2 fas fa-basketball-ball'>
										<CardTitle className='text-sm font-medium'>
											Basketball
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className='text-2xl font-bold'>TEAM vs. TEAM</div>
										<p className='text-lg text-muted-foreground'>
											Gymnasium @ 15:00
										</p>
									</CardContent>
								</Card>
							</CarouselItem>
							
							<CarouselItem className="md:basis-1/4 lg:basis-1/6">
								<Card x-chunk='dashboard-01-chunk-1'>
									<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
										<CardTitle className='text-sm font-medium'>
											Volleyball
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className='text-2xl font-bold'>TEAM vs. TEAM</div>
										<p className='text-lg text-muted-foreground'>
											Gymnasium @ 15:00
										</p>
									</CardContent>
								</Card>
							</CarouselItem>

							<CarouselItem className="md:basis-1/4 lg:basis-1/6">
								<Card x-chunk='dashboard-01-chunk-2'>
									<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
										<CardTitle className='text-sm font-medium'>Baseball</CardTitle>
									</CardHeader>
									<CardContent>
										<div className='text-2xl font-bold'>TEAM vs. TEAM</div>
										<p className='text-lg text-muted-foreground'>
											Gymnasium @ 15:00
										</p>
									</CardContent>
								</Card>
							</CarouselItem>
							
							<CarouselItem className="md:basis-1/4 lg:basis-1/6">
								<Card x-chunk='dashboard-01-chunk-3'>
									<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
										<CardTitle className='text-sm font-medium'>
											Badminton
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className='text-2xl font-bold'>TEAM vs. TEAM</div>
										<p className='text-lg text-muted-foreground'>
											Gymnasium @ 15:00
										</p>
									</CardContent>
								</Card>
							</CarouselItem>
							
							<CarouselItem className="md:basis-1/4 lg:basis-1/6">
								<Card x-chunk='dashboard-01-chunk-3'>
									<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
										<CardTitle className='text-sm font-medium'>
											Soccer
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className='text-2xl font-bold'>TEAM vs. TEAM</div>
										<p className='text-lg text-muted-foreground'>
											Gymnasium @ 15:00
										</p>
									</CardContent>
								</Card>
							</CarouselItem>
							
							<CarouselItem className="md:basis-1/4 lg:basis-1/6">
								<Card x-chunk='dashboard-01-chunk-3'>
									<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
										<CardTitle className='text-sm font-medium'>
											Track and Field
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className='text-2xl font-bold'>TEAM vs. TEAM</div>
										<p className='text-lg text-muted-foreground'>
											Gymnasium @ 15:00
										</p>
									</CardContent>
								</Card>
							</CarouselItem>
							
							<CarouselItem className="md:basis-1/4 lg:basis-1/6">
								<Card x-chunk='dashboard-01-chunk-3'>
									<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
										<CardTitle className='text-sm font-medium'>
											Table Tennis
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className='text-2xl font-bold'>TEAM vs. TEAM</div>
										<p className='text-lg text-muted-foreground'>
											Gymnasium @ 15:00
										</p>
									</CardContent>
								</Card>
							</CarouselItem>
							
							<CarouselItem className="md:basis-1/4 lg:basis-1/6">
								<Card x-chunk='dashboard-01-chunk-3'>
									<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
										<CardTitle className='text-sm font-medium'>
											Chess
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className='text-2xl font-bold'>TEAM vs. TEAM</div>
										<p className='text-lg text-muted-foreground'>
											Gymnasium @ 15:00
										</p>
									</CardContent>
								</Card>
							</CarouselItem>
							
							<CarouselItem className="md:basis-1/4 lg:basis-1/6">
								<Card x-chunk='dashboard-01-chunk-3'>
									<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
										<CardTitle className='text-sm font-medium'>
											Music
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className='text-2xl font-bold'>TEAM vs. TEAM</div>
										<p className='text-lg text-muted-foreground'>
											Gymnasium @ 15:00
										</p>
									</CardContent>
								</Card>
							</CarouselItem>
							
							<CarouselItem className="md:basis-1/4 lg:basis-1/6">
								<Card x-chunk='dashboard-01-chunk-3'>
									<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
										<CardTitle className='text-sm font-medium'>
											Music
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className='text-2xl font-bold'>TEAM vs. TEAM</div>
										<p className='text-lg text-muted-foreground'>
											Gymnasium @ 15:00
										</p>
									</CardContent>
								</Card>
							</CarouselItem>
						</CarouselContent>						
							<CarouselPrevious />
							<CarouselNext />
					</Carousel>

				</div>
				<div className='grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3'>
					<Card className='xl:col-span-2' x-chunk='dashboard-01-chunk-4'>
						<CardHeader className='flex flex-row items-center'>
							<div className='grid gap-2'>
								<CardTitle>Recently Ended Events</CardTitle>
								<CardDescription>
									Recent transactions from your store.
								</CardDescription>
							</div>
							<Button asChild size='sm' className='ml-auto gap-1'>
								{/* <Link href='#'>
									View All
									<ArrowUpRight className='h-4 w-4' />
								</Link> */}
							</Button>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Customer</TableHead>
										<TableHead className='hidden xl:table-column'>
											Type
										</TableHead>
										<TableHead className='hidden xl:table-column'>
											Status
										</TableHead>
										<TableHead className='hidden xl:table-column'>
											Date
										</TableHead>
										<TableHead className='text-right'>Winner</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell>
											<div className='font-medium'>Liam Johnson</div>
											<div className='hidden text-sm text-muted-foreground md:inline'>
												liam@example.com
											</div>
										</TableCell>
										<TableCell className='hidden xl:table-column'>
											Sale
										</TableCell>
										<TableCell className='hidden xl:table-column'>
											<Badge className='text-xs' variant='outline'>
												Approved
											</Badge>
										</TableCell>
										<TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
											2023-06-23
										</TableCell>
										<TableCell className='text-right'>$250.00</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<div className='font-medium'>Olivia Smith</div>
											<div className='hidden text-sm text-muted-foreground md:inline'>
												olivia@example.com
											</div>
										</TableCell>
										<TableCell className='hidden xl:table-column'>
											Refund
										</TableCell>
										<TableCell className='hidden xl:table-column'>
											<Badge className='text-xs' variant='outline'>
												Declined
											</Badge>
										</TableCell>
										<TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
											2023-06-24
										</TableCell>
										<TableCell className='text-right'>$150.00</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<div className='font-medium'>Noah Williams</div>
											<div className='hidden text-sm text-muted-foreground md:inline'>
												noah@example.com
											</div>
										</TableCell>
										<TableCell className='hidden xl:table-column'>
											Subscription
										</TableCell>
										<TableCell className='hidden xl:table-column'>
											<Badge className='text-xs' variant='outline'>
												Approved
											</Badge>
										</TableCell>
										<TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
											2023-06-25
										</TableCell>
										<TableCell className='text-right'>$350.00</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<div className='font-medium'>Emma Brown</div>
											<div className='hidden text-sm text-muted-foreground md:inline'>
												emma@example.com
											</div>
										</TableCell>
										<TableCell className='hidden xl:table-column'>
											Sale
										</TableCell>
										<TableCell className='hidden xl:table-column'>
											<Badge className='text-xs' variant='outline'>
												Approved
											</Badge>
										</TableCell>
										<TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
											2023-06-26
										</TableCell>
										<TableCell className='text-right'>$450.00</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<div className='font-medium'>Liam Johnson</div>
											<div className='hidden text-sm text-muted-foreground md:inline'>
												liam@example.com
											</div>
										</TableCell>
										<TableCell className='hidden xl:table-column'>
											Sale
										</TableCell>
										<TableCell className='hidden xl:table-column'>
											<Badge className='text-xs' variant='outline'>
												Approved
											</Badge>
										</TableCell>
										<TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
											2023-06-27
										</TableCell>
										<TableCell className='text-right'>$550.00</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</CardContent>
					</Card>
					<Card x-chunk='dashboard-01-chunk-5'>
						<CardHeader>
							<CardTitle>Team Ranking</CardTitle>
						</CardHeader>
						<CardContent className='grid gap-8'>
							<div className='flex items-center gap-4'>
								<Avatar className='hidden h-9 w-9 sm:flex'>
									<AvatarImage src='/avatars/01.png' alt='Avatar' />
									<AvatarFallback>T</AvatarFallback>
								</Avatar>
								<div className='grid gap-1'>
									<p className='text-sm font-medium leading-none'>
										Targaryen
									</p>
								</div>
								<div className='ml-auto font-medium'>48,985
									<p className='text-sm text-muted-foreground'>
										+5,123
									</p>
								</div>
							</div>
							<div className='flex items-center gap-4'>
								<Avatar className='hidden h-9 w-9 sm:flex'>
									<AvatarImage src='/avatars/02.png' alt='Avatar' />
									<AvatarFallback>B</AvatarFallback>
								</Avatar>
								<div className='grid gap-1'>
									<p className='text-sm font-medium leading-none'>
										Baratheon
									</p>
								</div>
								<div className='ml-auto font-medium'>45,835
									<p className='text-sm text-muted-foreground'>
										+2,003
									</p>
								</div>
							</div>
							<div className='flex items-center gap-4'>
								<Avatar className='hidden h-9 w-9 sm:flex'>
									<AvatarImage src='/avatars/03.png' alt='Avatar' />
									<AvatarFallback>S</AvatarFallback>
								</Avatar>
								<div className='grid gap-1'>
									<p className='text-sm font-medium leading-none'>
										Stark
									</p>
								</div>
								<div className='ml-auto font-medium'>45,305
									<p className='text-sm text-muted-foreground'>
										+2,874
									</p>
								</div>
							</div>
							<div className='flex items-center gap-4'>
								<Avatar className='hidden h-9 w-9 sm:flex'>
									<AvatarImage src='/avatars/04.png' alt='Avatar' />
									<AvatarFallback>S</AvatarFallback>
								</Avatar>
								<div className='grid gap-1'>
									<p className='text-sm font-medium leading-none'>
										Snow
									</p>
								</div>
								<div className='ml-auto font-medium'>38,633
									<p className='text-sm text-muted-foreground'>
										+2,564
									</p>
								</div>
							</div>
							<div className='flex items-center gap-4'>
								<Avatar className='hidden h-9 w-9 sm:flex'>
									<AvatarImage src='/avatars/05.png' alt='Avatar' />
									<AvatarFallback>L</AvatarFallback>
								</Avatar>
								<div className='grid gap-1'>
									<p className='text-sm font-medium leading-none'>
										Lannister
									</p>
								</div>
								<div className='ml-auto font-medium'>38,537
									<p className='text-sm text-muted-foreground'>
										+2,471
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	)
}
