import React, { memo } from 'react'
import cx from 'clsx'
import { useStyles } from './betListStyles'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'

export const BetListItem = memo(function KanbanCard() {
    const classes = useStyles()
    return (
        <Card className={cx(classes.card)} elevation={0}>
            <Box>
                <h3 className={classes.heading}>team1 vs team2</h3>
                <h4>some info</h4>
                <p className={classes.subheader}>30€ • 2.5</p>
                <Box display={'flex'} alignItems={'center'}></Box>
            </Box>
        </Card>
    )
})

export default BetListItem
