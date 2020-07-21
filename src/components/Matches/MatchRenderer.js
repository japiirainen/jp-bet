import React from 'react'
import { useQuery } from 'react-query'
import Match from './match'
import MatchCard from './newMatch'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Alert } from '../Helpers/Alert'
import { fetchMatches } from '../../Utils/apiclient'
import useStyles from './styles'
import { Container } from '@material-ui/core'
import { useRouteMatch, Switch, Route } from 'react-router-dom'

const MatchRenderer = () => {
    const classes = useStyles()

    const { isLoading, isError, data, error } = useQuery(
        'matchData',
        fetchMatches
    )

    const { path, url } = useRouteMatch()

    return (
        <>
            <Container maxWidth="sm">
                <Switch>
                    <Route exact path={path}>
                        <div className={classes.matchContainer}>
                            {isLoading ? (
                                <div className={classes.loader}>
                                    <LinearProgress color="primary" />
                                </div>
                            ) : (
                                data.map((match) => (
                                    <MatchCard key={match._id} {...match} />
                                ))
                            )}
                            {isError && (
                                <Alert
                                    className={classes.alert}
                                    severity="error"
                                >
                                    {' '}
                                    {error.message}{' '}
                                </Alert>
                            )}
                        </div>
                    </Route>
                </Switch>
            </Container>
        </>
    )
}

export default MatchRenderer
