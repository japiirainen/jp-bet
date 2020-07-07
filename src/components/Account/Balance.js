import React, { useState } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import PaymentIcon from '@material-ui/icons/Payment'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './balanceStyles'
import { TextField, Button } from '@material-ui/core'
import {
    currentUserInfo,
    authTokens,
} from '../../stateManagement/Recoil/Atoms/userAtoms'
import { useRecoilValue } from 'recoil'
import { CustomModal } from '../Helpers/CustomModal'
import { useFormInput } from '../Helpers/functions'
import { updateUserBalance } from '../../Utils/apiclient'
import { useSnackbar } from 'notistack'

const R = require('ramda')

const Balance = () => {
    const classes = useStyles()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [open, setOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const amount = useFormInput('')

    const handleClick = () => {
        setOpen(!open)
    }
    const handleDialog = (dialogOpen) => {
        setDialogOpen(dialogOpen)
    }

    const user = useRecoilValue(currentUserInfo)
    const tokens = useRecoilValue(authTokens)

    const { enqueueSnackbar } = useSnackbar()

    const handleToast = (variant) => {
        enqueueSnackbar(`Successfully deposited ${amount.value}€`, {
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
    const inputs = {
        balance: amount.value,
    }
    const confirmDeposit = () => {
        updateUserBalance(inputs, user._id, tokens)
            .then(() => handleToast('success'))
            .catch((e) => handleErrorToast('error', e.message))
    }

    const handleDepositClick = () => {
        if (R.isEmpty(amount.value)) {
            setErrorMessage('Amount is required!')
        } else {
            handleDialog(true)
        }
    }

    return (
        <>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <Typography variant="h6" className={classes.title}>
                        {user.username} account balance
                    </Typography>
                }
                className={classes.root}
            >
                <ListItem>
                    <ListItemIcon>
                        <AccountBalanceIcon />
                    </ListItemIcon>
                    <ListItemText primary={`${user.balance}€`} />
                </ListItem>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <PaymentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Deposit" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem className={classes.nested}>
                            <TextField
                                className={classes.input}
                                id="standard-number"
                                label="Amount (€)"
                                type="number"
                                required
                                error={Boolean(errorMessage)}
                                helperText={errorMessage}
                                {...amount}
                            />
                            <Button
                                className={classes.button}
                                variant="text"
                                size="large"
                                color="inherit"
                                onClick={handleDepositClick}
                            >
                                <ListItemIcon>
                                    <DoubleArrowIcon />
                                </ListItemIcon>
                            </Button>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <CustomModal
                isOpen={dialogOpen}
                handleClose={() => handleDialog(false)}
                handleConfirm={confirmDeposit}
                title="Please confirm that your deposit is as intended!"
            >
                <Typography>
                    {amount.value} into {user.username} account.
                </Typography>
            </CustomModal>
        </>
    )
}

export default Balance
