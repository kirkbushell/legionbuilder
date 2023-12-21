"use client"

import { Message, useToasterState } from "@components/toaster/state"

function ToasterMessage({ message }: { message: Message }) {
	const { remove } = useToasterState()

	return (
		<button className={`clip-path-octagon-sm text-center bg-error-700 text-white p-2 bg-${message.type == "error"}-700`} onClick={() => remove(message.id)}>
			{message.message}
		</button>
	)
}

export default function () {
	const { messages } = useToasterState()

	return (
		<div className="absolute bottom-0 space-y-2 m-2">
			{messages.map((message) => (
				<ToasterMessage message={message} key={message.id} />
			))}
		</div>
	)
}
