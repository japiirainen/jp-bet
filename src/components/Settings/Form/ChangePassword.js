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
import { passwordSchema } from './Validation'
import { updateUserInfo } from '../../../Utils/apiclient'
import {
    currentUserInfo,
    authTokens,
} from '../../../stateManagement/Recoil/Atoms/userAtoms'
import { toastState } from '../../../stateManagement/Recoil/Atoms/appAtoms'

const ChangePassword = () => {
    const classes = useStyles()
    const { enqueueSnackbar } = useSnackbar()
    const history = useHistory()
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(passwordSchema),
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
                        <FormHeader subheader="Here you can change your password!" />
                        <Grid item md={12} sm={12} xs={12}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    type="password"
                                    color="secondary"
                                    margin="normal"
                                    id="password"
                                    label="new password"
                                    variant="outlined"
                                    helperText={errors.password?.message}
                                    error={Boolean(errors.password?.message)}
                                    fullWidth
                                    name="password"
                                    inputRef={register}
                                    inputProps={autoComplete}
                                />
                                <TextField
                                    type="password"
                                    color="secondary"
                                    margin="normal"
                                    id="confirmpassword"
                                    label="confirm password"
                                    variant="outlined"
                                    helperText={errors.confirmPassword?.message}
                                    error={Boolean(
                                        errors.confirmPassword?.message
                                    )}
                                    fullWidth
                                    name="confirm password"
                                    inputRef={register}
                                    inputProps={autoComplete}
                                />

                                <Button
                                    variant="outlined"
                                    type="submit"
                                    color="primary"
                                    fullWidth
                                >
                                    Confirm password change
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Grow>
    )
}

export default ChangePassword
