import React from 'react'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { Link, useRouteMatch } from 'react-router-dom'
import MatchCard from './newMatch'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Alert } from '../Helpers/Alert'
import { fetchMatches } from '../../Utils/apiclient'
import useStyles from './styles'
import { Container, Typography } from '@material-ui/core'
import { CustomTooltip } from '../Helpers/CustomTooltip'
import { authTokens } from '../../stateManagement/Recoil/Atoms/userAtoms'

const MatchRenderer = () => {
    const classes = useStyles()

    const tokens = useRecoilValue(authTokens)

    const { isLoading, isError, data, error } = useQuery(
        'matchData',
        fetchMatches
    )
    const { url } = useRouteMatch()

    return (
        <>
            <Container maxWidth="sm">
                <Typography variant="h4" className={classes.title}>
                    Currently open Counter-Strike matches
                </Typography>
                <div className={classes.matchContainer}>
                    {isLoading ? (
                        <div className={classes.loader}>
                            <LinearProgress color="primary" />
                        </div>
                    ) : (
                        data.map((match) => (
                            <CustomTooltip
                                placement="right"
                                key={match._id}
                                title={
                                    !tokens
                                        ? 'Must be signed in to view!'
                                        : 'Click for odds and betting options!'
                                }
                                aria-label="link"
                            >
                                <Link
                                    key={match._id}
                                    to={
                                        !tokens
                                            ? `/signin`
                                            : `${url}/${match._id}`
                                    }
                                    className={classes.link}
                                >
                                    <MatchCard key={match._id} {...match} />
                                </Link>
                            </CustomTooltip>
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
