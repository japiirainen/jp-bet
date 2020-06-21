import React from 'react'
import useFetch from '../../Utils/useFetch'
import { Config } from '../../Utils/config'
import Match from './match'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Alert } from '../Alert'

import useStyles from './styles'

const Matches = (props) => {
    const classes = useStyles()

    const url = `${Config.endpoint}/api/v1/match`

    const { data, isLoading, hasError, errorMessage } = useFetch(url)
    console.log(data)

    return (
        <>
            {isLoading ? (
                <CircularProgress
                    className={classes.loader}
                    color="secondary"
                />
            ) : (
                data.map((match) => <Match key={match._id} {...match} />)
            )}
            {hasError && <Alert severity="error">{errorMessage}</Alert>}
        </>
    )
}

export default Matches
