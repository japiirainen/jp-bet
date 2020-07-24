import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { getSingleMatch } from '../../Utils/apiclient'
import {
    authTokens,
    currentUserInfo,
} from '../../stateManagement/Recoil/Atoms/userAtoms'
import { LinearProgress, Typography, Divider, Grid } from '@material-ui/core'
import { useStyles } from './newMatchStyles'
import { Alert } from '../Helpers/Alert'
import BetProduct from './BetProduct'

const MatchBetting = () => {
    const classes = useStyles()
    const { id } = useParams()
    const [user, setUser] = useRecoilState(currentUserInfo)
    const tokens = useRecoilValue(authTokens)

    const { isLoading, isError, data, error } = useQuery(
        'singleMatchData',
        () => getSingleMatch(id, tokens)
    )
    return (
        <>
            {isLoading ? (
                <div className={classes.loader}>
                    <LinearProgress color="primary" />
                </div>
            ) : (
                <>
                    <Typography
                        className={classes.productHeader}
                        variant="h5"
                        component="h2"
                    >
                        {data.team1} - {data.team2} <br />
                        {new Date(data.matchDate).toLocaleString()}
                    </Typography>
                    <Divider />
                    <Grid container className={classes.root} spacing={3}>
                        <Grid item xs>
                            <BetProduct
                                data={data}
                                user={user}
                                setUser={setUser}
                                tokens={tokens}
                            />
                        </Grid>
                    </Grid>
                </>
            )}

            {isError && (
                <Alert className={classes.alert} severity="error">
                    {' '}
                    {error.message}{' '}
                </Alert>
            )}
        </>
    )
}

export default MatchBetting
