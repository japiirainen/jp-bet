import React from 'react'
import useFetch from '../../Utils/useFetch'

import Match from './match'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Alert } from '../Helpers/Alert'

import useStyles from './styles'

const Matches = (props) => {
    const classes = useStyles()

    const { data, isLoading, hasError, errorMessage } = useFetch(
        '/api/v1/match'
    )

    return (
        <div className={classes.matchContainer}>
            {isLoading ? (
                <div className={classes.loader}>
                    <LinearProgress color="secondary" />
                </div>
            ) : (
                data.map((match) => <Match key={match._id} {...match} />)
            )}
            {hasError && <Alert severity="error"> {errorMessage} </Alert>}
        </div>
    )
}

export default Matches
