import React from 'react'
import { useRecoilValue } from 'recoil'
import { useQuery } from 'react-query'
import { useStyles } from './balanceStyles'
import { getDeposits } from '../../../Utils/apiclient'
import DepositHistoryItem from './DepositHistoryItem'
import { Typography, LinearProgress } from '@material-ui/core'
import { Alert } from '../../Helpers/Alert'
import {
    authTokens,
    currentUserInfo,
} from '../../../stateManagement/Recoil/Atoms/userAtoms'

const DepositHistory = () => {
    const classes = useStyles()

    const { _id } = useRecoilValue(currentUserInfo)
    const tokens = useRecoilValue(authTokens)

    const { isLoading, isError, data, error } = useQuery('depositHistory', () =>
        getDeposits(tokens, _id)
    )

    return (
        <>
            <Typography variant="h6" className={classes.title}>
                Deposit History
            </Typography>
            {isLoading ? (
                <div className={classes.loader}>
                    <LinearProgress color="primary" />
                </div>
            ) : (
                data.map((deposit) => (
                    <DepositHistoryItem key={deposit._id} {...deposit} />
                ))
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

export default DepositHistory
