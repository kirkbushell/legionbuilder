import { describe } from "@jest/globals"
import { act, renderHook } from "@testing-library/react"
import { Message, MessageType, useToasterState } from "@components/toaster/state"

describe("Toaster state", () => {
	it("Begins with no messages available", () => {
		const { result } = renderHook(() => useToasterState())

		expect(result.current.messages).toEqual([])
	})

	it("Can add messages to the stack", () => {
		const { result } = renderHook(() => useToasterState())

		act(() => result.current.add(new Message(MessageType.Error, "uh oh!")))

		expect(result.current.messages).toHaveLength(1)
	})

	it("Can remove messages from the stack", () => {
		const { result } = renderHook(() => useToasterState())

		const message1 = new Message(MessageType.Success, "Successful")
		const message2 = new Message(MessageType.Error, "Ruh-roh!")

		act(() => result.current.add(message1))
		act(() => result.current.add(message2))

		expect(result.current.messages).toHaveLength(2)

		act(() => result.current.remove(message2.id))

		expect(result.current.messages[0].type).toBe("error")
	})
})
