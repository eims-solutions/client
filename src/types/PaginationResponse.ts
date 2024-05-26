export interface PaginationLinks {
	first: string | null
	last: string | null
	next: string | null
	prev: string | null
}

export interface PaginationMetaLinks {
	active: boolean
	label: string
	url: string | null
}

export interface PaginationMeta {
	current_page: number
	from: number
	last_page: number
	links: PaginationMetaLinks[]
	path: string
	per_page: number
	to: number
	total: number
}

export interface PaginationResponse<T> {
	data: T[]
	links: PaginationLinks
	meta: PaginationMeta
}
