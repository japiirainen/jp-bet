import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { getSingleMatch } from '../../Utils/apiclient'
import {
    authTokens,
    currentUserInfo,
} from '../../stateManagement/Recoil/Atoms/userAtoms'
import { LinearProgress } from '@material-ui/core'
import { useStyles } from './newMatchStyles'
import { Alert } from '../Helpers/Alert'
import BetProduct from './BetProduct'

const MatchBetting = () => {
    const classes = useStyles()
    const { id } = useParams()
    //const [user, setUser] = useRecoilState(currentUserInfo)
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
                <BetProduct data={data} />
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
