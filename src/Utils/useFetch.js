import { useState, useEffect } from 'react'

const useFetch = (initialUrl, skip = false) => {
    const [url, updateUrl] = useState(initialUrl)
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [refetchIndex, setRefetchIndex] = useState(0)

    const refetch = () =>
        setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1)

    useEffect(() => {
        const fetchData = async () => {
            if (skip) return
            setIsLoading(true)
            try {
                const response = await fetch(url)
                const result = await response.json()
                if (response.ok) {
                    setData(result)
                } else {
                    setHasError(true)
                    setErrorMessage(result)
                }
            } catch (error) {
                setHasError(true)
                setErrorMessage(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url, skip, refetchIndex])
    return { data, isLoading, hasError, errorMessage, updateUrl, refetch }
}

export default useFetch
