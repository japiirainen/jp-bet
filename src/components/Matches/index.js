import React, { useEffect, useState } from 'react'
import Match from './match'
import CircularProgress from '@material-ui/core/CircularProgress'
import { getMatches, token } from '../../apiclient'

const Matches = (props) => {
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(true)
    // eslint-disable-next-line
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        getMatches(token)
            .then(setMatches)
            .then(setLoading(false))
            .catch((error) => {
                setError(error)
            })
    }, [])

    return (
        <>
            {loading ? (
                <CircularProgress color="secondary" />
            ) : (
                matches.map((match) => <Match key={match._id} {...match} />)
            )}
        </>
    )
}

export default Matches
