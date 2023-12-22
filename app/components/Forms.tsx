import React, { createElement, Children, ReactNode, ReactElement, DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react"
import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

type FormProps = PropsWithChildren<{
	defaultValues?: any
	children: ReactElement[]
	formSchema: any
	onSubmit: SubmitHandler<FormData>
}> &
	DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>

export function Form({ defaultValues, children, onSubmit, formSchema, ...attributes }: FormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ defaultValues, resolver: zodResolver(formSchema) })

	const mapFields = (children: any): any => {
		return Children.map(children, (child) => {
			if (!child) return

			if ([Input].indexOf(child.type) !== -1) {
				return createElement(child.type, {
					...{
						...child.props,
						register,
						key: child.props.name,
					},
				})
			}

			if (Errors === child.type) {
				return createElement(child.type, {
					...{
						...child.props,
						errors,
					},
				})
			}

			return child.props?.children
				? {
						...child,
						props: {
							...child.props,
							children: mapFields(child.props.children),
						},
					}
				: child
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} {...attributes} noValidate>
			{mapFields(children)}
		</form>
	)
}

export function Input({ register, name, ...attributes }: PropsWithChildren<{ register?: UseFormRegister<any>; name: string }> & DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
	if (!register) return

	return <input {...register(name)} {...attributes} />
}

export function Select({ register, options, name, ...attributes }: { register?: UseFormRegister<any>; options: [object: { key: string; value: ReactNode }]; name: string }) {
	return (
		<select {...register(name)} {...attributes}>
			{options.map((option) => (
				<option key={option.key}>{option.value}</option>
			))}
		</select>
	)
}

export function Errors({ name, errors }: { name: string; errors?: { [key: string]: { message: string } } }) {
	if (!errors || !errors[name]) return

	return (
		<p role="alert" className="bg-error-800 my-1 p-2 py-1 clip-path-halfagon-sm">
			{errors[name].message}
		</p>
	)
}
