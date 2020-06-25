import React from 'react'
import BetListItem from './BetListItem'
import { Typography } from '@material-ui/core'
import { useStyles } from './betListStyles'

const ClosedBetList = () => {
    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.header} variant="h6">
                Your closed bets:
            </Typography>
            <BetListItem />
        </div>
    )
}

export default ClosedBetList
