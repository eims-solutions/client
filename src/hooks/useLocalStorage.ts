export function useLocalStorage() {
	const setItem = (key: string, value: unknown) => {
		window.localStorage.setItem(key, JSON.stringify(value))
	}

	const getItem = (key: string) => {
		const item = window.localStorage.getItem(key)
		return item ? JSON.parse(item) : undefined
	}

	const removeItem = (key: string) => {
		window.localStorage.removeItem(key)
	}

	const clearItems = () => {
		window.localStorage.clear()
	}

	return { setItem, getItem, removeItem, clearItems }
}
