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
                const response = await fetch(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZGY2M2Y0M2M2MTU3MjYzMjg5NGY0NyIsImlhdCI6MTU5MTY5ODQyMCwiZXhwIjoxNjAwMzM4NDIwfQ.rp-VE6oqGqqMIlRutzOHtnknEPqv3w4UY5yg5UQZ568',
                    },
                })
                const result = await response.json()
                if (response.ok) {
                    setData(result.data)
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
    }, [skip, url, refetchIndex])
    return { data, isLoading, hasError, errorMessage, updateUrl, refetch }
}

export default useFetch
