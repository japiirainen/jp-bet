import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useMutation } from 'react-query'
import { useSnackbar } from 'notistack'
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Fab,
    Divider,
    Radio,
    TextField,
} from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create'
import { useStyles } from './newMatchStyles'
import { CustomModal } from '../Helpers/CustomModal'
import { postBetSlip } from '../../Utils/apiclient'
import { toastState } from '../../stateManagement/Recoil/Atoms/appAtoms'
import { useFormInput, calculateReturn } from '../Helpers/functions'

const BetProduct = ({ data, user, setUser, tokens }) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(0)
    const amount = useFormInput('')
    const handleChange = (event) => {
        setSelectedValue(event.target.value)
    }

    const [notification, setNotification] = useRecoilState(toastState)
    const { enqueueSnackbar } = useSnackbar()
    const handleDialog = (open) => {
        setOpen(open)
    }
    const inputs = {
        choice: selectedValue,
        amount: amount.value,
        targetMatch: data._id,
        createdBy: user._id,
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

    const [onSubmit] = useMutation(
        () => postBetSlip(inputs, user._id, tokens),
        {
            onSuccess: ({ user }) => {
                setNotification(true)
                setUser(user)
                handleDialog(false)
            },
            onError: (e) => handleErrorToast('error', e.message),
        }
    )

    useEffect(() => {
        const handleToast = (variant) => {
            enqueueSnackbar(`Your bet was Successful!`, {
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
            <Card raised className={classes.root}>
                <Grid container spacing={1}>
                    <CardContent className={classes.content}>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            component="p"
                        >
                            Bet type: <br />{' '}
                            {data.products.onextwo.result && '1 x 2'}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            component="div"
                        >
                            Odds: <br />
                            {data.team1}
                            {' - '} {'tie'} {' - '}
                            {data.team2} <br />
                        </Typography>
                        <Divider orientation="horizontal" />
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            component="div"
                        >
                            {data.odds.team1Win} {' - '} {data.odds.tie} {' - '}
                            {data.odds.team2Win}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Fab
                            color="primary"
                            size="medium"
                            className={classes.absolute}
                            onClick={() => handleDialog(true)}
                        >
                            <CreateIcon />
                        </Fab>
                    </CardContent>
                </Grid>
            </Card>
            <CustomModal
                isOpen={open}
                handleClose={() => handleDialog(false)}
                handleConfirm={onSubmit}
                title="Specify details about youre bet!"
            >
                <Grid container spacing={2}>
                    <Grid item md={6} xs={5}>
                        <TextField
                            type="number"
                            color="secondary"
                            margin="normal"
                            id="firstname"
                            label="amount"
                            variant="outlined"
                            name="amount"
                            {...amount}
                        />
                    </Grid>
                    <Grid item md={'auto'} xs={2}>
                        <Typography variant="h6">{data.team1}</Typography>
                        <Radio
                            color="primary"
                            checked={selectedValue === 'team1'}
                            onChange={handleChange}
                            name="team1"
                            value="team1"
                        />
                    </Grid>
                    <Grid item md={'auto'} xs={2}>
                        <Typography variant="h6">{'tie'}</Typography>
                        <Radio
                            color="primary"
                            checked={selectedValue === 'tie'}
                            onChange={handleChange}
                            name="tie"
                            value="tie"
                        />
                    </Grid>
                    <Grid item md={'auto'} xs={2}>
                        <Typography variant="h6">{data.team2}</Typography>
                        <Radio
                            color="primary"
                            checked={selectedValue === 'team2'}
                            onChange={handleChange}
                            name="team2"
                            value="team2"
                        />
                    </Grid>
                </Grid>
                {selectedValue && amount.value > 0 ? (
                    <Typography variant="subtitle1">
                        Projected win:{' '}
                        {calculateReturn(
                            data.odds[
                                selectedValue !== 'tie'
                                    ? `${selectedValue}Win`
                                    : selectedValue
                            ],
                            amount.value
                        )}{' '}
                        €
                    </Typography>
                ) : null}
            </CustomModal>
        </>
    )
}

export default BetProduct
