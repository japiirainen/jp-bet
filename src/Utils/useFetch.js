import { useState, useEffect } from 'react'

function handleError(setHasError, result, setErrorMessage, response) {
    setHasError(true)
    if (result.errors) {
        setErrorMessage(result.errors.join(' '))
    }
    setErrorMessage(response.statusText)
}


const useFetch = (initialUrl, skip = false, method = 'GET') => {
    const [url, updateUrl] = useState(initialUrl)
    const [data, setData] = useState([])
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
                    method,
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
                    handleError(setHasError, result, setErrorMessage, response)
                }
            } catch (error) {
                setHasError(true)
                setErrorMessage(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    },[skip, url, refetchIndex, method])
    return { data, isLoading, hasError, errorMessage, updateUrl, refetch }
}

export default useFetch

