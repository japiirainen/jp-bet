import React from 'react'
import BetListItem from './BetListItem'
import { useStyles } from './betListStyles'
import { Typography } from '@material-ui/core'

const OpenBetList = () => {
    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.header} variant="h6">
                Your open bets:
            </Typography>
            <BetListItem />
        </div>
    )
}

export default OpenBetList
