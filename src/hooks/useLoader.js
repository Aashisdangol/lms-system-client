import { useState } from "react"

const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false)

  const startLoading = () => setIsLoading(true)
  const stopLoading = () => setIsLoading(false)

  return {
    isLoading,
    setIsLoading,
    startLoading,
    stopLoading
  }
}

export default useLoader