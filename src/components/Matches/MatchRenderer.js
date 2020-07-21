import React from 'react'
import { useQuery } from 'react-query'
import Match from './match'
import MatchCard from './newMatch'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Alert } from '../Helpers/Alert'
import { fetchMatches } from '../../Utils/apiclient'
import useStyles from './styles'
import { Container, Tooltip } from '@material-ui/core'
import { Link, useRouteMatch } from 'react-router-dom'

const MatchRenderer = () => {
    const classes = useStyles()

    const { isLoading, isError, data, error } = useQuery(
        'matchData',
        fetchMatches
    )

    const { url } = useRouteMatch()

    return (
        <>
            <Container maxWidth="sm">
                <div className={classes.matchContainer}>
                    {isLoading ? (
                        <div className={classes.loader}>
                            <LinearProgress color="primary" />
                        </div>
                    ) : (
                        data.map((match) => (
                            <Tooltip
                                key={match._id}
                                title="Click for betting options!"
                                aria-label="link"
                            >
                                <Link
                                    key={match._id}
                                    to={`${url}/${match._id}`}
                                    className={classes.link}
                                >
                                    <MatchCard key={match._id} {...match} />
                                </Link>
                            </Tooltip>
                        ))
                    )}
                    {isError && (
                        <Alert className={classes.alert} severity="error">
                            {' '}
                            {error.message}{' '}
                        </Alert>
                    )}
                </div>
            </Container>
        </>
    )
}

export default MatchRenderer
