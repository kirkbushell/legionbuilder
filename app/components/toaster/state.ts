import { create } from "zustand"

type ToasterState = {
	messages: Message[]
	add: (message: Message) => void
	remove: (id: number) => void
}

export const useToasterState = create<ToasterState>()((set, get) => ({
	messages: [],
	add: (message: Message) => {
		set(function (state) {
			return { messages: [...state.messages, message] }
		})
		setTimeout(() => get().remove(message.id), 3000)
	},
	remove: (id: number) =>
		set(function (state) {
			let index: boolean | number = false
			const messages = state.messages

			for (let i = 0; i < state.messages.length; i++) {
				if (state.messages[i].id !== id) continue

				index = i
				break
			}

			if (index !== false) {
				messages.splice(index, 1)
			}
			console.log(messages)
			return { messages }
		}),
}))

export enum MessageType {
	Error = "error",
	Info = "info",
	Success = "success",
	Warning = "warning",
}

export class Message {
	readonly id: number
	readonly type: MessageType
	readonly message: string

	constructor(type: MessageType, message: string) {
		this.id = Math.floor(Math.random() * 10000000)
		this.type = type
		this.message = message
	}
}
