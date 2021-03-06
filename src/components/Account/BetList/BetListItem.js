import React from 'react'
import cx from 'clsx'
import { useStyles } from './betListStyles'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import MoneyIcon from '@material-ui/icons/Money'
import { Chip, Typography } from '@material-ui/core'

export const BetListItem = ({ bet, targetMatch }) => {
    const classes = useStyles()
    return (
        <Card className={cx(classes.card)} elevation={0}>
            <Box>
                <h3 className={classes.heading}>
                    {targetMatch.team1} vs {targetMatch.team2}
                </h3>
                <h4>
                    Bet size &rarr;
                    {'  '}
                    {bet.amount}€{' '}
                </h4>
                <Typography
                    variant="body1"
                    component="div"
                    className={classes.subheader}
                >
                    Projected win with odds @{' '}
                    {
                        targetMatch.odds[
                            bet.choice !== 'tie'
                                ? `${bet.choice}Win`
                                : bet.choice
                        ]
                    }{' '}
                    for {bet.choice} &rarr;
                    <Chip
                        label={`${bet.projectedWin} €`}
                        size="medium"
                        icon={<MoneyIcon className={classes.icon} />}
                        className={classes.fabSuccess}
                    />
                </Typography>
                <p className={classes.subheader}>
                    Bet made: <br />
                    {new Date(bet.createdAt).toLocaleString()}
                </p>
                <Box display={'flex'} alignItems={'center'}></Box>
            </Box>
        </Card>
    )
}

export default BetListItem
