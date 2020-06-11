import React, { useEffect, useState } from 'react'
import Match from './match'
import { getMatches, token } from '../../apiclient'

const Matches = (props) => {
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getMatches(token).then(setMatches).catch(console.error)
    }, [])

    return (
        <>
            {matches.map((match) => (
                <Match key={match._id} {...match} />
            ))}
        </>
    )
}

export default Matches
