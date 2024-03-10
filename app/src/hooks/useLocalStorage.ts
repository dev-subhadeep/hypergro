import { useState } from "react"

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (newValue: T) => void] => {
  const storedValue = localStorage.getItem(key)
  const initial = storedValue ? JSON.parse(storedValue) : initialValue
  const [value, setValue] = useState<T>(initial)
  const updateLocalStorage = (newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue))
    setValue(newValue)
  }

  return [value, updateLocalStorage]
}

export default useLocalStorage
