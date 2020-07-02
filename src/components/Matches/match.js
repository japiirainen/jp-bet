import React, { useState } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Grow from '@material-ui/core/Grow'
import useStyles from './styles'
import { TextField, Radio } from '@material-ui/core'
import { postBetSlip } from '../../Utils/apiclient'
import { currentUserInfo } from '../../stateManagement/Recoil/Atoms/userAtoms'
import { CustomModal } from '../Helpers/CustomModal'
import { useRecoilValue } from 'recoil'
import { Alert } from '../Helpers/Alert'

const R = require('ramda')

const Match = (props) => {
    const classes = useStyles()
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    // form data
    const [amount, setAmount] = useState('')
    const [selectedValue, setSelectedValue] = React.useState('')
    const handleChange = (event) => {
        setSelectedValue(event.target.value)
    }

    const user = useRecoilValue(currentUserInfo)

    const onBet = () => {
        if (user !== null) {
            if (R.isEmpty(amount) && R.isEmpty(selectedValue)) {
                setHasError(true)
                setErrorMessage('Amount and one option is required')
            }
            setConfirmOpen(true)
        } else {
            return (
                <Alert severity="error">
                    You need to be signed in to make a bet!
                </Alert>
            )
        }
    }

    //fix fix
    const data = {
        amount: amount,
    }

    const confirmBet = () => {
        postBetSlip(data, user._id)
    }

    return (
        <div className={classes.root}>
            <Grow in>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                    >
                        <div className={classes.column}>
                            <Typography className={classes.heading}>
                                {props.category}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.item}>
                                {props.team1}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.item}>vs</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.item}>
                                {props.team2}
                            </Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <Divider />
                    <ExpansionPanelDetails className={classes.oddsNames}>
                        <div className={classes.column}>
                            <Typography className={classes.item}>
                                {props.team1} odds &darr;
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.item}>
                                tie odds &darr;
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.item}>
                                {props.team2} dds &darr;
                            </Typography>
                        </div>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails className={classes.odds}>
                        <div className={classes.column}>
                            <Typography
                                component="div"
                                className={classes.item}
                            >
                                {props.odds.team1Win}{' '}
                                <Radio
                                    checked={selectedValue === 'team1'}
                                    onChange={handleChange}
                                    name="team1"
                                    value="team1"
                                />
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography
                                component="div"
                                className={classes.item}
                            >
                                {props.odds.tie}
                                <Radio
                                    checked={selectedValue === 'tie'}
                                    onChange={handleChange}
                                    name="tie"
                                    value="tie"
                                />
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography
                                component="div"
                                className={classes.item}
                            >
                                {props.odds.team2Win}
                                <Radio
                                    checked={selectedValue === 'team2'}
                                    onChange={handleChange}
                                    name="team2"
                                    value="team2"
                                />
                            </Typography>
                        </div>
                    </ExpansionPanelDetails>

                    <Divider />

                    <ExpansionPanelActions>
                        <div className={classes.column}>
                            <TextField
                                className={classes.input}
                                variant="outlined"
                                id="standard-number"
                                label="Amount"
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.item}>€</Typography>
                        </div>
                        <Button
                            variant="outlined"
                            size="large"
                            color="inherit"
                            onClick={onBet}
                        >
                            <CustomModal
                                open={confirmOpen}
                                setOpen={setConfirmOpen}
                                onConfirm={confirmBet}
                                title="Confirm bet"
                            >
                                {user !== null && (
                                    <Typography>
                                        {user.username} account balance:{'  '}
                                        {user.balance}
                                    </Typography>
                                )}
                            </CustomModal>
                            make a bet
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
            </Grow>
        </div>
    )
}

export default Match
