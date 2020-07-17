import React from 'react'
import cx from 'clsx'
import { useStyles } from './betListStyles'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import { Chip, Typography } from '@material-ui/core'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
import ClearIcon from '@material-ui/icons/Clear'
import { checkEquality } from '../../Helpers/functions'

export const ClosedBetListItem = ({ bet, targetMatch }) => {
    const classes = useStyles()

    return (
        <Card className={cx(classes.card)} elevation={5}>
            <Box>
                <h3 className={classes.heading}>
                    {targetMatch.team1} vs {targetMatch.team2}{' '}
                </h3>
                <Typography
                    variant="body1"
                    component="div"
                    className={classes.subheader}
                >
                    Match date: <br />
                    {new Date(targetMatch.matchDate).toLocaleString()}
                    {checkEquality(bet.choice, bet.result) ? (
                        <Chip
                            label={`won ${bet.projectedWin}€`}
                            size="medium"
                            icon={<DoneOutlineIcon className={classes.icon} />}
                            className={classes.fabSuccess}
                        />
                    ) : (
                        <Chip
                            label={`lost ${bet.amount}€`}
                            size="medium"
                            icon={<ClearIcon className={classes.icon} />}
                            className={classes.fabDanger}
                        />
                    )}
                </Typography>
                <Box display={'flex'} alignItems={'center'}></Box>
            </Box>
        </Card>
    )
}

export default ClosedBetListItem
