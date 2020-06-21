import React from 'react'
import useFetch from '../../Utils/useFetch'
import { Config } from '../../Utils/config'
import Match from './match'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Alert } from '../Alert'

import useStyles from './styles'

const Matches = (props) => {
    const classes = useStyles()

    const url = `${Config.endpoint}/match`

    const { data, isLoading, hasError, errorMessage } = useFetch(url)
    console.log(data)

    var match = []
    return (
        <>
            {isLoading ? (
                <CircularProgress
                    className={classes.loader}
                    color="secondary"
                />
            ) : (
                match.map((match) => <Match key={match._id} {...match} />)
            )}
            {hasError && <Alert severity="error">{errorMessage}</Alert>}
        </>
    )
}

export default Matches
