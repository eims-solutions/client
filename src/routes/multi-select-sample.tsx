import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import {
	MultiSelect,
	MultiSelectContent,
	MultiSelectList,
	MultiSelectOption,
	MultiSelectSearch,
	MultiSelectTrigger,
	MultiSelectValue,
	renderMultiSelectOptions,
} from '@/components/ui/multi-select'
import { cn } from '@/utils/cn'
import { zodResolver } from '@hookform/resolvers/zod'
import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const Route = createFileRoute('/multi-select-sample')({
	component: MultiSelectSample,
})

const OPTIONS: MultiSelectOption[] = [
	{ value: 'react', label: 'React' },
	{ value: 'next', label: 'Next.js' },
	{ value: 'remix', label: 'Remix' },
	{ value: 'vue', label: 'Vue' },
	{ value: 'nuxt', label: 'Nuxt' },
	{ value: 'angular', label: 'Angular' },
	{ value: 'svelte', label: 'Svelte' },
]

const FormSchema = z.object({
	frameworks: z
		.array(z.string(), {
			required_error: 'Please select at least one framework',
		})
		.min(1, 'Please select at least one framework'),
})

function MultiSelectSample() {
	const form = useForm({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			frameworks: [],
		},
	})

	const onSubmit = (data: z.infer<typeof FormSchema>) => {
		console.log(`Selected frameworks: ${JSON.stringify(data, null, 2)}`)
	}

	return (
		<div className={cn('container flex justify-center items-center h-screen')}>
			<Card className={cn('mx-auto max-w-sm')}>
				<CardHeader className={cn('space-y-1')}>
					<div className={cn('flex justify-between mb-4')}>
						<CardTitle className='text-2xl font-bold'>
							MultiSelect Sample
						</CardTitle>
					</div>
					<CardDescription>Select your favorite frameworks</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name='frameworks'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Frameworks</FormLabel>

										<MultiSelect
											onValueChange={field.onChange}
											defaultValue={field.value}>
											<FormControl>
												<MultiSelectTrigger>
													<MultiSelectValue placeholder='Select frameworks' />
												</MultiSelectTrigger>
											</FormControl>
											<MultiSelectContent>
												<MultiSelectSearch />
												<MultiSelectList>
													{renderMultiSelectOptions(OPTIONS)}
												</MultiSelectList>
											</MultiSelectContent>
										</MultiSelect>

										<FormMessage />
									</FormItem>
								)}
							/>
							<Button className={cn('w-full mt-5')} type='submit'>
								Submit
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	)
}
