import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { Alert } from '../Helpers/Alert'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Grow } from '@material-ui/core'
import useStyles from './styles'
import { onSignup } from '../../Utils/apiclient'
import { useAuth } from '../../stateManagement/auth'
import { currentUserInfo } from '../../stateManagement/Recoil/Atoms/userAtoms'
import schema from './Validation'

const SignUp = (props) => {
    const classes = useStyles()
    const referer =
        (props.location.state && props.location.state.referer.pathname) || '/'

    const [isLoggedIn, setLoggedIn] = useState(false)
    const [isError, setIsError] = useState(false)

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    })

    const autoComplete = {
        autoComplete: 'new-password',
        form: {
            autoComplete: 'off',
        },
    }

    const { setAuthTokens } = useAuth()

    const setUser = useSetRecoilState(currentUserInfo)

    const onSubmit = (data) => {
        onSignup(data)
            .then(({ token, user }) => {
                setAuthTokens(token)
                setUser(user)
                setLoggedIn(true)
            })
            .catch((e) => {
                setIsError(true)
            })
    }

    if (isLoggedIn) {
        return <Redirect to={referer} />
    }

    return (
        <Grow in>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form
                        className={classes.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
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
                                    name="username"
                                    variant="outlined"
                                    helperText={errors.username?.message}
                                    error={Boolean(errors.username?.message)}
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    autoFocus
                                    inputRef={register}
                                    inputProps={autoComplete}
                                ></TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    helperText={errors.email?.message}
                                    error={Boolean(errors.email?.message)}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    inputRef={register}
                                    inputProps={autoComplete}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    helperText={errors.password?.message}
                                    error={Boolean(errors.password?.message)}
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
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
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link
                                    color="inherit"
                                    href="/signin"
                                    variant="body2"
                                >
                                    Already have an account ? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>{' '}
                </div>{' '}
                {isError && (
                    <Alert severity="error">
                        Signup failed, try again later!
                    </Alert>
                )}
            </Container>
        </Grow>
    )
}

export default SignUp
