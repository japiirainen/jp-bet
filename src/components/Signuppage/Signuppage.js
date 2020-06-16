import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
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
import Container from '@material-ui/core/Container'
import Grow from '@material-ui/core/Grow'
import Copyright from '../Copyright/copyright'
import useStyles from './styles'
import { onSignup } from '../../apiclient'
import jwt from 'jsonwebtoken'

const SignUp = () => {
    const classes = useStyles()
    const [redirect, setRedirect] = useState()
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
    })
    const { username, email, password } = inputs

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs((input) => ({ ...input, [name]: value }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onSignup(inputs)
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
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="username"
                                    name="username"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    autoFocus
                                    onChange={handleChange}
                                    value={username}
                                ></TextField>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    value={email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                    value={password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="allowExtraEmails"
                                            color="default"
                                        />
                                    }
                                    label="I agree with the terms of service"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="inherit"
                            className={classes.submit}
                            onClick={onSubmit}
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
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </Grow>
    )
}

export default SignUp