import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import { Alert } from '../Helpers/Alert'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'
import Container from '@material-ui/core/Container'
import { Grow } from '@material-ui/core'
import { fetchSignin } from '../../Utils/apiclient'
import {
    currentUserInfo,
    authTokens,
} from '../../stateManagement/Recoil/Atoms/userAtoms'
import { useSetRecoilState } from 'recoil'

const SignIn = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const referer =
        (props.location.state && props.location.state.referer.pathname) || '/'

    const [isLoggedIn, setLoggedIn] = useState(false)
    const [isError, setIsError] = useState(false)
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })
    const { email, password } = inputs

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs((input) => ({
            ...input,
            [name]: value,
        }))
    }

    const setUser = useSetRecoilState(currentUserInfo)
    const setAuthTokens = useSetRecoilState(authTokens)

    const postSignin = (e) => {
        e.preventDefault()
        fetchSignin(inputs)
            .then(({ token, user }) => {
                localStorage.setItem('JPBET_TOKEN', token)
                setAuthTokens(token)
                setUser(user)
                setLoggedIn(true)
            })
            .catch((e) => {
                setIsError(true)
            })
    }

    if (isLoggedIn) {
        history.push(referer)
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
                            color="secondary"
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
                            color="secondary"
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
                            variant="outlined"
                            color="secondary"
                            className={classes.submit}
                            onClick={postSignin}
                        >
                            Sign In{' '}
                        </Button>{' '}
                        <Grid container>
                            <Grid item xs>
                                <Button
                                    style={{ fontSize: '12px' }}
                                    color="primary"
                                    variant="text"
                                    onClick={() => history.push('/forgot')}
                                >
                                    Forgot password?
                                </Button>{' '}
                            </Grid>{' '}
                            <Grid item>
                                <Button
                                    style={{ fontSize: '12px' }}
                                    color="primary"
                                    variant="text"
                                    onClick={() => history.push('/signup')}
                                >
                                    Don't have an account? Sign Up
                                </Button>{' '}
                            </Grid>{' '}
                        </Grid>{' '}
                    </form>{' '}
                </div>{' '}
                {isError && (
                    <Alert severity="error">
                        Username or password incorrect!
                    </Alert>
                )}{' '}
            </Container>
        </Grow>
    )
}

export default SignIn
