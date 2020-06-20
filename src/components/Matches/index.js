import React, { useEffect, useState } from 'react'
import Match from './match'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Alert } from '../Alert'
import { getMatches, token } from '../../Utils/apiclient'

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
            {error && (
                <Alert severity="error">Username or password incorrect!</Alert>
            )}
        </>
    )
}

export default Matches
