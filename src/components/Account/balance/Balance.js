import React, { useState, Suspense, useEffect } from 'react'
import List from '@material-ui/core/List'
import { useSnackbar } from 'notistack'
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
import { TextField, Button, LinearProgress } from '@material-ui/core'
import {
    currentUserInfo,
    authTokens,
} from '../../../stateManagement/Recoil/Atoms/userAtoms'
import { toastState } from '../../../stateManagement/Recoil/Atoms/appAtoms'
import { useRecoilValue, useRecoilState } from 'recoil'
import { CustomModal } from '../../Helpers/CustomModal'
import { useFormInput } from '../../Helpers/functions'
import { updateUserBalance } from '../../../Utils/apiclient'

const R = require('ramda')

const Balance = () => {
    const classes = useStyles()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [open, setOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [notification, setNotification] = useRecoilState(toastState)
    const amount = useFormInput('')

    const handleClick = () => {
        setOpen(!open)
    }
    const handleDialog = (dialogOpen) => {
        setDialogOpen(dialogOpen)
    }

    const [user, setUser] = useRecoilState(currentUserInfo)
    const tokens = useRecoilValue(authTokens)

    const { enqueueSnackbar } = useSnackbar()

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
        amount: amount.value,
    }

    const handleDepositClick = () => {
        if (R.isEmpty(amount.value)) {
            setErrorMessage('Amount is required!')
        } else {
            handleDialog(true)
        }
    }

    const confirmDeposit = () => {
        updateUserBalance(inputs, user._id, tokens)
            .then(({ user }) => {
                setNotification(true)
                setUser(user)
                handleDialog(false)
            })

            .catch((e) => handleErrorToast('error', e.message))
    }
    useEffect(() => {
        const handleToast = (variant) => {
            enqueueSnackbar(`Deposit Successful!`, {
                variant,
                preventDuplicate: true,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                },
                onClose: () => {
                    setNotification(false)
                },
            })
        }

        if (notification) {
            handleToast('success')
        }
    }, [notification, enqueueSnackbar, setNotification])

    return (
        <>
            <Suspense fallback={<LinearProgress color="secondary" />}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <Typography variant="h5" className={classes.title}>
                            Account balance
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
                                    color="secondary"
                                    variant="standard"
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
                                    color="primary"
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
                        {amount.value}€ into {user.username} account.
                    </Typography>
                </CustomModal>
            </Suspense>
        </>
    )
}

export default Balance
