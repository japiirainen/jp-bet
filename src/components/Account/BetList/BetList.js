import React from 'react'
import { useRecoilValue } from 'recoil'
import { useQuery } from 'react-query'
import { fetchBetslips } from '../../../Utils/apiclient'
import BetListItem from './BetListItem'
import { useStyles } from './betListStyles'
import { Typography, Divider, LinearProgress } from '@material-ui/core'
import { Alert } from '../../Helpers/Alert'
import {
    authTokens,
    currentUserInfo,
} from '../../../stateManagement/Recoil/Atoms/userAtoms'

const OpenBetList = () => {
    const classes = useStyles()

    const { _id } = useRecoilValue(currentUserInfo)
    const tokens = useRecoilValue(authTokens)

    const { isLoading, isError, data, error } = useQuery('betslipData', () =>
        fetchBetslips(_id, tokens)
    )

    return (
        <div>
            <Typography className={classes.header} variant="h5">
                Your open bets
            </Typography>
            {isLoading ? (
                <div className={classes.loader}>
                    <LinearProgress color="secondary" />
                </div>
            ) : (
                data.map((item) => <BetListItem key={item.bet._id} {...item} />)
            )}
            <Divider />
            <Typography className={classes.header} variant="h5">
                Your Closed bets
            </Typography>

            {isError && <Alert severity="error"> {error.message} </Alert>}
        </div>
    )
}

export default OpenBetList
