import React, { useEffect, useState } from 'react'
// eslint-disable-next-line
import useFetch from '../../Utils/useFetch'
import Match from './match'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Alert } from '../Alert'
import { getMatches, token } from '../../Utils/apiclient'

const Matches = (props) => {
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    //TODO: change to use  useFetch
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
