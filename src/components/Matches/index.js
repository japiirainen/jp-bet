import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import useStyles from './styles'

export default function DetailedExpansionPanel() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div className={classes.column}>
                        <Typography className={classes.heading}>
                            Counter-Strike
                        </Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>
                            Team1 name
                        </Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>
                            vs
                        </Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>
                            Team2 name
                        </Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column} />
                    <div className={classes.column}>
                        <Typography>odds and other stuff</Typography>
                    </div>
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions>
                    <Button variant="outlined" size="medium" color="inherit">
                        make a bet
                    </Button>
                </ExpansionPanelActions>
            </ExpansionPanel>
        </div>
    )
}
