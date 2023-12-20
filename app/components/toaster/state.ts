import { create } from "zustand"

interface ToasterState {
	messages: object[]
	add: (message: object) => void
	remove: (index: number) => void
}

export const useToasterState = create<ToasterState>()((set) => ({
	messages: [],
	add: (message: object) => set((state) => ({ messages: [...state.messages, message] })),
	remove: (index: number) =>
		set(function (state) {
			const messages = state.messages.splice(index, 1)
			return { messages: state.messages }
		}),
}))
