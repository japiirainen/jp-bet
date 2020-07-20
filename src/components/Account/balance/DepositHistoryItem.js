import React from 'react'
import { useStyles } from './balanceStyles'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import { Chip, Typography } from '@material-ui/core'
import PaymentIcon from '@material-ui/icons/Payment'

export const DepositHistoryItem = (props) => {
    const classes = useStyles()
    console.log(props)

    return (
        <Card className={classes.card} elevation={5}>
            <Box className={classes.box}>
                <Typography
                    variant="body1"
                    component="div"
                    className={classes.subheader}
                >
                    Deposit date: <br />
                    {new Date(props.createdAt).toLocaleString()}
                    <Chip
                        label={`Amount: ${props.amount}€`}
                        size="medium"
                        icon={<PaymentIcon className={classes.icon} />}
                        className={classes.fabSuccess}
                    />
                </Typography>
                <Box display={'flex'} alignItems={'center'}></Box>
            </Box>
        </Card>
    )
}

export default DepositHistoryItem
