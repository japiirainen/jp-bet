import React from 'react'
import Balance from './Balance'
import OpenBetList from './BetList/OpenBetList'
import ClosedBetList from './BetList/ClosedBetList'
import { useStyles } from './balanceStyles'

const Account = () => {
    const classes = useStyles()

    return (
        <div className={classes.main}>
            <Balance />
            <OpenBetList />
            <ClosedBetList />
        </div>
    )
}

export default Account
