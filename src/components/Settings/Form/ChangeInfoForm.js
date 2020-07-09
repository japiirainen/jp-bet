import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useSnackbar } from 'notistack'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import FormHeader from './FormHeader'
import Grid from '@material-ui/core/Grid'
import { Container, TextField, Button } from '@material-ui/core'
import { useStyles } from './FormStyles'
import schema from './Validation'
import { updateUserInfo } from '../../../Utils/apiclient'
import {
    currentUserInfo,
    authTokens,
} from '../../../stateManagement/Recoil/Atoms/userAtoms'
import { toastState } from '../../../stateManagement/Recoil/Atoms/appAtoms'

const ChangeInfoForm = () => {
    const classes = useStyles()
    const { enqueueSnackbar } = useSnackbar()

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    })

    const handleErrorToast = (variant, message) => {
        enqueueSnackbar(message, {
            variant,
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            },
        })
    }

    const [notification, setNotification] = useRecoilState(toastState)
    const [user, setUser] = useRecoilState(currentUserInfo)
    const tokens = useRecoilValue(authTokens)

    const onSubmit = (data) => {
        updateUserInfo(data, user._id, tokens)
            .then(({ user }) => {
                setNotification(true)
                setUser(user)
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
        <div className={classes.main}>
            <Container maxWidth="xs">
                <Grid container>
                    <FormHeader />
                    <Grid item md={12} sm={12} xs={12}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                color="secondary"
                                margin="normal"
                                id="firstname"
                                label="First Name"
                                variant="outlined"
                                helperText={errors.firstname?.message}
                                error={Boolean(errors.firstname?.message)}
                                fullWidth
                                name="firstname"
                                inputRef={register({ min: 2, max: 99 })}
                            />
                            <TextField
                                color="secondary"
                                margin="normal"
                                id="lastname"
                                label="Last Name"
                                variant="outlined"
                                helperText={errors.lastname?.message}
                                error={Boolean(errors.lastname?.message)}
                                fullWidth
                                name="lastname"
                                inputRef={register}
                            />
                            <TextField
                                color="secondary"
                                margin="normal"
                                id="email"
                                label="Email"
                                variant="outlined"
                                helperText={errors.email?.message}
                                error={Boolean(errors.email?.message)}
                                fullWidth
                                name="email"
                                inputRef={register}
                            />
                            <TextField
                                type="password"
                                color="secondary"
                                margin="normal"
                                id="oldpassword"
                                label="new password"
                                variant="outlined"
                                helperText={errors.oldpassword?.message}
                                error={Boolean(errors.oldpassword?.message)}
                                fullWidth
                                name="newpassword"
                                inputRef={register}
                            />

                            <Button
                                variant="outlined"
                                type="submit"
                                color="secondary"
                                fullWidth
                            >
                                Submit
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ChangeInfoForm
