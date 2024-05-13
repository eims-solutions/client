import { cn } from '@/utils/cn'
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react'

type H1Props = HTMLAttributes<HTMLHeadingElement> & PropsWithChildren

const H1 = forwardRef<HTMLHeadingElement, H1Props>(
	({ className, ...props }, ref) => {
		return (
			<h1
				className={cn(
					'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
H1.displayName = 'H1'

type H2Props = HTMLAttributes<HTMLHeadingElement> & PropsWithChildren

const H2 = forwardRef<HTMLHeadingElement, H2Props>(
	({ className, ...props }, ref) => {
		return (
			<h2
				className={cn(
					'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
H2.displayName = 'H2'

type H3Props = HTMLAttributes<HTMLHeadingElement> & PropsWithChildren

const H3 = forwardRef<HTMLHeadingElement, H3Props>(
	({ className, ...props }, ref) => {
		return (
			<h3
				className={cn(
					'scroll-m-20 text-2xl font-semibold tracking-tight',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
H3.displayName = 'H3'

type H4Props = HTMLAttributes<HTMLHeadingElement> & PropsWithChildren

const H4 = forwardRef<HTMLHeadingElement, H4Props>(
	({ className, ...props }, ref) => {
		return (
			<h4
				className={cn(
					'scroll-m-20 text-xl font-semibold tracking-tight',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
H4.displayName = 'H4'

type H5Props = HTMLAttributes<HTMLHeadingElement> & PropsWithChildren

const H5 = forwardRef<HTMLHeadingElement, H5Props>(
	({ className, ...props }, ref) => {
		return (
			<h5
				className={cn(
					'scroll-m-20 text-lg font-semibold tracking-tight',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
H5.displayName = 'H5'

type H6Props = HTMLAttributes<HTMLHeadingElement> & PropsWithChildren

const H6 = forwardRef<HTMLHeadingElement, H6Props>(
	({ className, ...props }, ref) => {
		return (
			<h6
				className={cn(
					'scroll-m-20 text-base font-semibold tracking-tight',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
H6.displayName = 'H6'

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & PropsWithChildren

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
	({ className, ...props }, ref) => {
		return (
			<p
				className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Paragraph.displayName = 'P'

type BlockquoteProps = HTMLAttributes<HTMLQuoteElement> & PropsWithChildren

const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
	({ className, ...props }, ref) => {
		return (
			<blockquote
				className={cn('mt-6 border-l-2 pl-6 italic', className)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Blockquote.displayName = 'Blockquote'

type InlineCodeProps = HTMLAttributes<HTMLElement> & PropsWithChildren

const InlineCode = forwardRef<HTMLElement, InlineCodeProps>(
	({ className, ...props }, ref) => {
		return (
			<code
				className={cn('px-1 bg-background text-primary rounded-sm', className)}
				ref={ref}
				{...props}
			/>
		)
	}
)
InlineCode.displayName = 'InlineCode'

type LeadProps = HTMLAttributes<HTMLParagraphElement> & PropsWithChildren

const Lead = forwardRef<HTMLParagraphElement, LeadProps>(
	({ className, ...props }, ref) => {
		return (
			<p
				className={cn('text-xl text-muted-foreground', className)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Lead.displayName = 'P'

type Large = HTMLAttributes<HTMLDivElement> & PropsWithChildren

const Large = forwardRef<HTMLDivElement, Large>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn('text-lg font-semibold', className)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Large.displayName = 'Large'

type SmallProps = HTMLAttributes<HTMLElement> & PropsWithChildren

const Small = forwardRef<HTMLElement, SmallProps>(
	({ className, ...props }, ref) => {
		return (
			<small
				className={cn('text-sm font-medium leading-none', className)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Small.displayName = 'Small'

type MutedProps = HTMLAttributes<HTMLParagraphElement> & PropsWithChildren

const Muted = forwardRef<HTMLParagraphElement, MutedProps>(
	({ className, ...props }, ref) => {
		return (
			<p
				className={cn('text-sm text-muted-foreground', className)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Muted.displayName = 'P'

export {
	Blockquote,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	InlineCode,
	Large,
	Lead,
	Muted,
	Paragraph,
	Small,
}
