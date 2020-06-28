import React from 'react'
import Divider from '@material-ui/core/Divider'
import Balance from './Balance'
import OpenBetList from './BetList/OpenBetList'
import ClosedBetList from './BetList/ClosedBetList'
import { useStyles } from './balanceStyles'
import { Typography } from '@material-ui/core'



const Account = () => {
    const classes = useStyles()


    return (
        <div className={classes.main}>
            <Balance />
            <Divider />
            <Typography variant="h4">Betting history</Typography>
            <OpenBetList />
            <ClosedBetList />
        </div>
    )
}

export default Account
