import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Copyright from '../Copyright/copyright'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'
import Container from '@material-ui/core/Container'
import Grow from '@material-ui/core/Grow'
import { onSignin } from '../../apiclient'
import jwt from 'jsonwebtoken'

const SignIn = () => {
    const classes = useStyles()
    const [redirect, setRedirect] = useState()
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })
    const { email, password } = inputs

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs((input) => ({ ...input, [name]: value }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onSignin(inputs)
            .then(({ token }) => {
                localStorage.setItem('JPBET_TOKEN', token)
                localStorage.setItem(
                    'JPBET_USER',
                    JSON.stringify(jwt.decode(token))
                )
                setRedirect('/')
            })
            .catch((e) => console.error(e))
    }

    if (redirect) return <Redirect to={redirect} />

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
                        />
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
                            onClick={onSubmit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link color="inherit" href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    color="inherit"
                                    href="/signup"
                                    variant="body2"
                                >
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </Grow>
    )
}

export default SignIn