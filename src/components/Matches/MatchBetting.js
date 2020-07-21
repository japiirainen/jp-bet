import React from 'react'
import { useParams } from 'react-router-dom'

export const MatchBetting = () => {
    let { _id } = useParams()
    return <h1>{_id}</h1>
}
