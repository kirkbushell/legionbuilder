"use client"

import React from "react"
import Link from "next/link"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import useAuthState from "@/app/Auth"
import Main from "@components/Main"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Message, MessageType, useToasterState } from "@components/toaster/state"
import { FirebaseError } from "@firebase/util"
import errorMap from "@utils/FirebaseErrorMap.json"

type FormData = {
	email: string
	password: string
}

const formSchema = zod
	.object({
		email: zod.string().email().min(3).max(255),
		password: zod.string().min(1),
	})
	.required()

const page = () => {
	const { add } = useToasterState()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(formSchema) })

	const saveSession = useAuthState((state) => state.saveSession)
	const auth = getAuth()
	const router = useRouter()

	const handleSignIn = async (data: FormData) => {
		try {
			const credentials = await signInWithEmailAndPassword(auth, data.email, data.password)
			saveSession(credentials.user.uid)
			router.back()
		} catch (error: unknown) {
			if (error instanceof FirebaseError) {
				// @ts-ignore - don't know how to resolve this one, as you can't define types on JSON files.
				let message = errorMap[error.code] ?? error.message

				add(new Message(MessageType.Error, message))
			}
		}
	}

	return (
		<Main className="flex flex-col mt-20 items-center">
			<section className="flex flex-col gap-12 p-4 w-full lg:w-1/2">
				<form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col gap-6 items-start">
					<div className="flex w-full">
						<label htmlFor="email" className="font-graduate w-1/4 py-1">
							Email
						</label>
						<div className="w-3/4">
							<input type="email" {...register("email")} className="w-full text-secondary-200 bg-secondary-700 p-1 px-2 outline-none focus:outline-secondary-400 focus:border-0" />
							{errors.email && (
								<p role="alert" className="bg-error-800 my-1 p-2 py-1 clip-path-halfagon-sm">
									{`${errors.email.message}`}
								</p>
							)}
						</div>
					</div>
					<div className="flex items-center w-full">
						<label htmlFor="password" className="font-graduate w-1/4">
							Password
						</label>
						<input type="password" {...register("password", { required: true })} className="text-secondary-200 bg-secondary-700 w-3/4 p-1 px-2 outline-none focus:outline-secondary-400 focus:border-0" />
					</div>
					<div className="w-full flex items-center gap-12">
						<button type="submit" className="bg-primary-500 clip-path-halfagon-sm py-1 px-4 text-primary-100 font-semibold font-graduate hover:bg-primary-500 hover:text-primary-500 ml-1/4">
							Login
						</button>
						<Link href="/account/register" className="underline hover:text-primary-500">
							I don't have an account.
						</Link>
					</div>
				</form>

				<p className="p-4 bg-secondary-800 text-secondary-300 clip-path-octagon-md italic">Please note: An account is NOT required to use the builder. An account is only required if you want to save more than one list or create links for sharing with other players.</p>
			</section>
		</Main>
	)
}

export default page
