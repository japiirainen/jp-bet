import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useSnackbar } from 'notistack'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import FormHeader from './FormHeader'
import Grid from '@material-ui/core/Grid'
import { Container, TextField, Button, Grow } from '@material-ui/core'
import { useStyles } from './FormStyles'
import { personalInfoSchema } from './Validation'
import { updateUserInfo } from '../../../Utils/apiclient'
import {
    currentUserInfo,
    authTokens,
} from '../../../stateManagement/Recoil/Atoms/userAtoms'
import { toastState } from '../../../stateManagement/Recoil/Atoms/appAtoms'

const ChangeInfoForm = () => {
    const classes = useStyles()
    const { enqueueSnackbar } = useSnackbar()
    const history = useHistory()
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(personalInfoSchema),
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
    const autoComplete = {
        autoComplete: 'new-password',
        form: {
            autoComplete: 'off',
        },
    }

    const [notification, setNotification] = useRecoilState(toastState)
    const [user, setUser] = useRecoilState(currentUserInfo)
    const tokens = useRecoilValue(authTokens)

    const onSubmit = (data) => {
        updateUserInfo(data, user._id, tokens)
            .then(({ data }) => {
                setNotification(true)
                setUser(data)
                history.push('/account/')
            })
            .catch((e) => handleErrorToast('error', e.message))
    }

    useEffect(() => {
        const handleToast = (variant) => {
            enqueueSnackbar(`You're personal info has been updated!`, {
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
        <Grow in>
            <div className={classes.main}>
                <Container maxWidth="xs">
                    <Grid container>
                        <FormHeader
                            title="Update your account information here."
                            subheader="You can change one or more of the choices below and click submit!"
                        />
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
                                    inputRef={register}
                                    inputProps={autoComplete}
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
                                    inputProps={autoComplete}
                                />
                                <TextField
                                    color="secondary"
                                    margin="normal"
                                    id="username"
                                    label="Username"
                                    variant="outlined"
                                    helperText={errors.username?.message}
                                    error={Boolean(errors.username?.message)}
                                    fullWidth
                                    name="username"
                                    inputRef={register}
                                    inputProps={autoComplete}
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
                                    inputProps={autoComplete}
                                />
                                <Button
                                    variant="outlined"
                                    type="submit"
                                    color="primary"
                                    fullWidth
                                >
                                    Confirm
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Grow>
    )
}

export default ChangeInfoForm
