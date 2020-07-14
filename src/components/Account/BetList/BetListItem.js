import React, { memo } from 'react'
import cx from 'clsx'
import { useStyles } from './betListStyles'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'

export const BetListItem = memo(function KanbanCard({ bet, targetMatch }) {
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
                <p className={classes.subheader}>
                    Projected win with odds @{' '}
                    {
                        targetMatch.odds[
                            bet.choice !== 'tie'
                                ? `${bet.choice}Win`
                                : bet.choice
                        ]
                    }{' '}
                    for {bet.choice} &rarr;
                    <br />
                    {bet.projectedWin}€
                </p>
                <p className={classes.subheader}>
                    Bet made: <br />
                    {new Date(bet.createdAt).toLocaleString()}
                </p>
                <Box display={'flex'} alignItems={'center'}></Box>
            </Box>
        </Card>
    )
})

export default BetListItem
