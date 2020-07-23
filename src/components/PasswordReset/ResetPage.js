import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
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
import { resetSchema } from './Validation'
import { putUserPassword } from '../../Utils/apiclient'
import { Alert } from '../Helpers/Alert'

const ResetPage = (props) => {
    const classes = useStyles()
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const history = useHistory()
    const params = useParams()
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(resetSchema),
    })

    const autoComplete = {
        autoComplete: 'new-password',
        form: {
            autoComplete: 'off',
        },
    }

    const [onSubmit] = useMutation(
        (data) => putUserPassword({ ...data, id: params.id }),
        {
            onSuccess: () => {
                setSuccess(true)
            },
            onError: (e) => {
                setError(true)
                setErrorMessage('Something went wrong. Please try again later!')
            },
        }
    )

    if (success) {
        return (
            <Grow in>
                <div className={classes.main}>
                    <Container maxWidth="xs">
                        <h2>Password reset was successful!</h2>
                        <Button
                            variant="outlined"
                            color="primary"
                            fullWidth
                            onClick={() => history.push('/signin')}
                        >
                            Go to signin!
                        </Button>
                    </Container>
                </div>
            </Grow>
        )
    }

    return (
        <Grow in>
            <div className={classes.main}>
                <Container maxWidth="xs">
                    <Grid container>
                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant="h5">
                                Please select your new password
                            </Typography>
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

export default ResetPage
