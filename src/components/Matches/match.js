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
import { TextField, Checkbox } from '@material-ui/core'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import {
    authTokens,
    currentUserState,
} from '../../stateManagement/Recoil/Atoms/userAtoms'
import { CustomModal } from '../Helpers/CustomModal'
import { useRecoilValue } from 'recoil'
import { Alert } from '../Helpers/Alert'

const Match = (props) => {
    const classes = useStyles()
    const [isOpen, setIsOpen] = useState(false)

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const auth = useRecoilValue(authTokens)
    const user = useRecoilValue(currentUserState)

    const [amount, setAmount] = useState('')
    const [state, setState] = useState({
        checkedTeam1: false,
        checkedTeam2: false,
        checkedTie: false,
    })

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked })
    }
    const onBet = () => {
        if (auth !== null) {
            //need to do something to make it work
            setIsOpen(true)
        } else {
            return (
                <Alert severity="error">
                    You need to be signed in to make a bet!
                </Alert>
            )
        }
    }

    const confirmBet = () => {}

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
                            <Typography className={classes.item}>
                                {props.odds.team1Win}{' '}
                                <Checkbox
                                    icon={
                                        <CheckBoxOutlineBlankIcon fontSize="small" />
                                    }
                                    checkedIcon={
                                        <CheckBoxIcon fontSize="small" />
                                    }
                                    name="checkedTeam1"
                                    onChange={handleChange}
                                />
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.item}>
                                {props.odds.tie}
                                <Checkbox
                                    icon={
                                        <CheckBoxOutlineBlankIcon fontSize="small" />
                                    }
                                    checkedIcon={
                                        <CheckBoxIcon fontSize="small" />
                                    }
                                    name="checkedTie"
                                    onChange={handleChange}
                                />
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.item}>
                                {props.odds.team2Win}
                                <Checkbox
                                    icon={
                                        <CheckBoxOutlineBlankIcon fontSize="small" />
                                    }
                                    checkedIcon={
                                        <CheckBoxIcon fontSize="small" />
                                    }
                                    name="checkedTeam2"
                                    onChange={handleChange}
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
                                isOpen={isOpen}
                                handleClose={handleCloseModal}
                                handleConfirm={confirmBet}
                                title="Confirm bet"
                            >
                                <Typography>
                                    {user.username} account balance:{'  '}
                                    {user.balance}
                                </Typography>
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
