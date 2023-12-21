import { describe } from "@jest/globals"
import { act, renderHook } from "@testing-library/react"
import { useToasterState } from "@components/toaster/state"

describe("Toaster state", () => {
	it("Begins with no messages available", () => {
		const { result } = renderHook(() => useToasterState())

		expect(result.current.messages).toEqual([])
	})

	it("Can add messages to the stack", () => {
		const { result } = renderHook(() => useToasterState())

		act(() => result.current.add({}))

		expect(result.current.messages).toHaveLength(1)
	})

	it("Can remove messages from the stack", () => {
		const { result } = renderHook(() => useToasterState())

		act(() => result.current.add({ type: "success" }))
		act(() => result.current.add({ type: "error" }))
		act(() => result.current.remove(0))

		expect(result.current.messages).toHaveLength(1)
		expect(result.current.messages[0]).toEqual({ type: "error" })
	})
})
