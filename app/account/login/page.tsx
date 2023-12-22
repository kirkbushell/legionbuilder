"use client"

import React, { useState } from "react"
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
import { Loader, Login } from "@components/Icons"
import { Errors, Form, Input } from "@components/Forms"

type FormData = {
	email: string
	password: string
}

const formSchema = zod
	.object({
		email: zod.string().email().min(3).max(255),
		password: zod.string().min(3),
	})
	.required()

const page = () => {
	const { add } = useToasterState()
	const [loading, setLoading] = useState(false)
	const saveSession = useAuthState((state) => state.saveSession)
	const auth = getAuth()
	const router = useRouter()

	const handleSignIn = async (data: FormData) => {
		setLoading(true)

		try {
			const credentials = await signInWithEmailAndPassword(auth, data.email, data.password)
			saveSession(credentials.user.uid)
			router.push("/lists")
			setLoading(false)
		} catch (error: unknown) {
			if (error instanceof FirebaseError) {
				// @ts-ignore - don't know how to resolve this one, as you can't define types on JSON files.
				let message = errorMap[error.code] ?? error.message
				add(new Message(MessageType.Error, message))
			}
			setLoading(false)
		}
	}

	return (
		<Main className="flex flex-col mt-10 lg:mt-20 items-center">
			<section className="flex flex-col gap-12 p-4 w-full lg:w-1/2">
				<Form onSubmit={handleSignIn} className="flex flex-col gap-6 items-start" formSchema={formSchema}>
					<div className="flex flex-col lg:flex-row w-full">
						<label htmlFor="email" className="font-graduate lg:w-1/4 py-2">
							Email
						</label>
						<div className="lg:w-3/4">
							<Input name="email" className="w-full text-secondary-200 bg-secondary-700 p-2 outline-none focus:outline-secondary-400 focus:border-0" />
							<Errors name="email" />
						</div>
					</div>
					<div className="flex flex-col lg:flex-row w-full">
						<label htmlFor="password" className="font-graduate lg:w-1/4 py-2">
							Password
						</label>
						<div className="lg:w-3/4">
							<Input name="password" className="w-full text-secondary-200 bg-secondary-700 p-2 outline-none focus:outline-secondary-400 focus:border-0" />
							<Errors name="password" />
						</div>
					</div>
					<div className="w-full flex items-center justify-center gap-6 lg:gap-12">
						<button type="submit" className={`flex items-center space-x-1 clip-path-halfagon-sm py-2 px-4 font-semibold font-graduate lg:ml-1/4 ${loading ? "bg-disabled-500 text-disabled-100" : "bg-primary-600 hover:bg-primary-400 text-primary-100 hover:text-primary-950"}`} disabled={loading}>
							<span>Login</span>
							{loading ? <Loader className="w-4 h-4 animate-spin" /> : <Login className="w-4 h-4" />}
						</button>
						<Link href="/account/register" className="underline hover:text-primary-500">
							I don't have an account.
						</Link>
					</div>
				</Form>

				<p className="p-4 bg-secondary-800 text-secondary-300 clip-path-octagon-md italic">Please note: An account is NOT required to use the builder. An account is only required if you want to save more than one list or create links for sharing with other players.</p>
			</section>
		</Main>
	)
}

export default page
