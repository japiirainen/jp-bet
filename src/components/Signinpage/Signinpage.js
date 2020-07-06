import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Copyright from '../Helpers/copyright'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { Alert } from '../Helpers/Alert'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'
import Container from '@material-ui/core/Container'
import { Grow } from '@material-ui/core'
import { fetchSignin } from '../../Utils/apiclient'
import { useAuth } from '../../stateManagement/auth'
import { currentUserInfo } from '../../stateManagement/Recoil/Atoms/userAtoms'
import { useSetRecoilState } from 'recoil'

const SignIn = (props) => {
    const classes = useStyles()

    const referer =
        (props.location.state && props.location.state.referer.pathname) || '/'

    const [isLoggedIn, setLoggedIn] = useState(false)
    const [isError, setIsError] = useState(false)
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })
    const { email, password } = inputs
    const { setAuthTokens } = useAuth()

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs((input) => ({
            ...input,
            [name]: value,
        }))
    }

    //putting user into recoil state
    const setUser = useSetRecoilState(currentUserInfo)

    const postSignin = (e) => {
        e.preventDefault()
        fetchSignin(inputs)
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
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleChange}
                            value={email}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={handleChange}
                        />{' '}
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="inherit"
                            className={classes.submit}
                            onClick={postSignin}
                        >
                            Sign In{' '}
                        </Button>{' '}
                        <Grid container>
                            <Grid item xs>
                                <Link color="inherit" href="#" variant="body2">
                                    Forgot password ?
                                </Link>{' '}
                            </Grid>{' '}
                            <Grid item>
                                <Link
                                    color="inherit"
                                    href="/signup"
                                    variant="body2"
                                >
                                    {"Don't have an account? Sign Up"}{' '}
                                </Link>{' '}
                            </Grid>{' '}
                        </Grid>{' '}
                    </form>{' '}
                </div>{' '}
                {isError && (
                    <Alert severity="error">
                        Username or password incorrect!
                    </Alert>
                )}{' '}
                <Box mt={8}>
                    <Copyright />
                </Box>{' '}
            </Container>
        </Grow>
    )
}

export default SignIn
