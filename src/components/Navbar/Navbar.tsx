import React from 'react'
import useStyles from './styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { Switch, Link, Route } from 'react-router-dom'
import Loginpage from '../Loginpage/Loginpage'
import Signuppage from '../Signuppage/Signuppage'

const Navbar: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Link className={classes.link} to="/">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Typography variant="h5" className={classes.title}>
                        Jp-bet
                    </Typography>
                    <Link className={classes.link} to="/signup">
                        <Button color="inherit">Signup</Button>
                    </Link>
                    <Link className={classes.link} to="/login">
                        <Button color="inherit">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
            <Switch>
                <Container maxWidth="md">
                    <Route path="/login">
                        <Loginpage />
                    </Route>
                    <Route path="/signup">
                        <Signuppage />
                    </Route>
                </Container>
            </Switch>
        </div>
    )
}

export default Navbar
