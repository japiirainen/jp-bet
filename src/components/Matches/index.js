import React from 'react'
import { useQuery } from 'react-query'
import Match from './match'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Alert } from '../Helpers/Alert'
import { fetchMatches } from '../../Utils/apiclient'
import useStyles from './styles'
import { Container } from '@material-ui/core'

const Matches = () => {
    const classes = useStyles()

    const { isLoading, isError, data, error } = useQuery(
        'matchData',
        fetchMatches
    )

    return (
        <Container maxWidth="sm">
            <div className={classes.matchContainer}>
                {isLoading ? (
                    <div className={classes.loader}>
                        <LinearProgress color="primary" />
                    </div>
                ) : (
                    data.map((match) => <Match key={match._id} {...match} />)
                )}
                {isError && (
                    <Alert className={classes.alert} severity="error">
                        {' '}
                        {error.message}{' '}
                    </Alert>
                )}
            </div>
        </Container>
    )
}

export default Matches
