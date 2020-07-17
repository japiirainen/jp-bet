import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from './balanceStyles'

const DepositHistory = () => {
    const classes = useStyles()
    return (
        <Typography variant="h6" className={classes.title}>
            Deposit History
        </Typography>
    )
}

export default DepositHistory
