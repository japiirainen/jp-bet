import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Typography from '@material-ui/core/Typography'
import { useSnackbar } from 'notistack'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Grow from '@material-ui/core/Grow'
import useStyles from './styles'
import { TextField, Radio } from '@material-ui/core'
import { postBetSlip } from '../../Utils/apiclient'
import {
    currentUserInfo,
    authTokens,
} from '../../stateManagement/Recoil/Atoms/userAtoms'
import { CustomModal } from '../Helpers/CustomModal'
import { useRecoilValue } from 'recoil'
import { Alert } from '../Helpers/Alert'
import { calculateReturn } from '../Helpers/functions'

const R = require('ramda')

const Match = (props) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [amount, setAmount] = useState('')
    const [selectedValue, setSelectedValue] = useState('')
    const handleChange = (event) => {
        setSelectedValue(event.target.value)
    }
    const { enqueueSnackbar } = useSnackbar()

    const handleDialog = (open) => {
        setOpen(open)
    }

    const handleToast = (variant) => {
        enqueueSnackbar('Your bet was created!', {
            variant,
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            },
        })
    }
    const handleErrorToast = (variant, message) => {
        enqueueSnackbar(message, {
            variant,
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            },
        })
    }

    const user = useRecoilValue(currentUserInfo)
    const tokens = useRecoilValue(authTokens)

    const onBet = () => {
        if (!user) {
            setHasError(true)
            setErrorMessage('Must me signed in!')
        } else if (R.isEmpty(amount)) {
            setErrorMessage('Amount is required')
        } else {
            handleDialog(true)
        }
    }

    const inputs = {
        choice: setSelectedValue,
        amount: amount,
        targetMatch: props._id,
        createdBy: user && user._id,
    }

    const confirmBet = () => {
        postBetSlip(inputs, user._id, tokens)
            .then(() => handleToast('success'))
            .catch((e) => handleErrorToast('error', e.message))
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
                                {props.team2} odds &darr;
                            </Typography>
                        </div>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails className={classes.odds}>
                        <div className={classes.column}>
                            <Typography
                                component="div"
                                className={classes.item}
                            >
                                {props.odds.team1Win}

                                {user && (
                                    <Radio
                                        checked={selectedValue === 'team1'}
                                        onChange={handleChange}
                                        name="team1"
                                        value="team1"
                                    />
                                )}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography
                                component="div"
                                className={classes.item}
                            >
                                {props.odds.tie}
                                {user && (
                                    <Radio
                                        checked={selectedValue === 'tie'}
                                        onChange={handleChange}
                                        name="tie"
                                        value="tie"
                                    />
                                )}
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography
                                component="div"
                                className={classes.item}
                            >
                                {props.odds.team2Win}
                                {user && (
                                    <Radio
                                        checked={selectedValue === 'team2'}
                                        onChange={handleChange}
                                        name="team2"
                                        value="team2"
                                    />
                                )}
                            </Typography>
                        </div>
                    </ExpansionPanelDetails>

                    <Divider />

                    {hasError && (
                        <Alert severity="error">
                            {' '}
                            {'Must be signed in and form fields filled'}{' '}
                        </Alert>
                    )}

                    <ExpansionPanelActions>
                        <div className={classes.column}>
                            {user && (
                                <TextField
                                    className={classes.input}
                                    variant="outlined"
                                    id="standard-number"
                                    label="Amount"
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                    error={Boolean(errorMessage)}
                                    helperText={errorMessage}
                                />
                            )}
                        </div>
                        <div className={classes.column}>
                            {user ? (
                                <Typography className={classes.item}>
                                    €
                                </Typography>
                            ) : (
                                <Link to="/signin">Signin to place a bet!</Link>
                            )}
                        </div>
                        <Button
                            disabled={!selectedValue}
                            variant="outlined"
                            size="large"
                            color="inherit"
                            onClick={onBet}
                        >
                            make a bet
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
            </Grow>
            <CustomModal
                isOpen={open}
                handleClose={() => handleDialog(false)}
                handleConfirm={confirmBet}
                title="Please confirm that your bet is as intended!"
            >
                {user !== null && (
                    <>
                        <Divider />
                        <Typography className={classes.dialogTypography}>
                            Account balance: <br></br>
                            <span>{user.balance}€</span>
                        </Typography>
                        <Typography className={classes.dialogTypography}>
                            Your bet:<br></br>
                            <span>
                                {amount}€ for {props[selectedValue] || 'tie'} @{' '}
                                {
                                    props.odds[
                                        selectedValue !== 'tie'
                                            ? `${selectedValue}Win`
                                            : selectedValue
                                    ]
                                }
                                <br></br>
                                {props.team1} vs {props.team2}
                            </span>
                        </Typography>
                        <Typography className={classes.dialogTypography}>
                            Projected win:<br></br>
                            <span>
                                {calculateReturn(
                                    props.odds[
                                        selectedValue !== 'tie'
                                            ? `${selectedValue}Win`
                                            : selectedValue
                                    ],
                                    amount
                                )}{' '}
                                €
                            </span>
                        </Typography>
                        <Divider />
                    </>
                )}
            </CustomModal>
        </div>
    )
}

export default Match
