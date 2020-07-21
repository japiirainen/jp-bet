import React from 'react'
import { useParams } from 'react-router-dom'

const MatchBetting = () => {
    const { id } = useParams()

    console.log('rendering' + id)

    return <h1>rendering match: {id}</h1>
}

export default MatchBetting
