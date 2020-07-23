import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import Grid from '@material-ui/core/Grid'
import {
    Container,
    TextField,
    Button,
    Grow,
    Typography,
} from '@material-ui/core'
import { useStyles } from '../Settings/Form/FormStyles'
import { forgotSchema } from './Validation'
import { postResetPassword } from '../../Utils/apiclient'
import { Alert } from '../Helpers/Alert'

const ForgotPage = () => {
    const classes = useStyles()
    const [emailSent, setEmailSent] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(forgotSchema),
    })

    const autoComplete = {
        autoComplete: 'new-password',
        form: {
            autoComplete: 'off',
        },
    }

    const [onSubmit] = useMutation((data) => postResetPassword(data), {
        onSuccess: () => setEmailSent(true),
        onError: (e) => {
            setError(true)
            setErrorMessage('Something went wrong. Please try again later!')
        },
    })

    if (emailSent) {
        return (
            <Typography
                style={{ textAlign: 'center', marginTop: '50px' }}
                variant="h5"
            >
                An email with reset instructions is on its way!
            </Typography>
        )
    }

    return (
        <Grow in>
            <div className={classes.main}>
                <Container maxWidth="xs">
                    <Grid container>
                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant="h5">
                                Please enter your email
                            </Typography>
                            <Typography variant="subtitle1">
                                We will send you an email to reset your
                                password!
                            </Typography>
                            <form onSubmit={handleSubmit(onSubmit)}>
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
                                    color="secondary"
                                    fullWidth
                                >
                                    Submit
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                    {error && (
                        <Alert
                            style={{ marginTop: '50px' }}
                            severity="error"
                            color="error"
                        >
                            {errorMessage}
                        </Alert>
                    )}
                </Container>
            </div>
        </Grow>
    )
}

export default ForgotPage
