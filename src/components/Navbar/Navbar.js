import React from 'react'
import Hamburger from './Hamburger'
import useStyles from './styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'
import { useAuth } from '../../stateManagement/auth'
const Navbar = (props) => {
    const classes = useStyles()

    const { authTokens } = useAuth()

    if (authTokens)
        return (
            <div className={classes.root}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Link className={classes.link} to="/">
                            <Button variant="text" color="inherit">
                                <HomeIcon />
                            </Button>
                        </Link>
                        <Typography variant="h5" className={classes.title}>
                            Jp-bet
                        </Typography>
                        <Hamburger />
                    </Toolbar>
                </AppBar>
            </div>
        )

    return (
        <div className={classes.root}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Link className={classes.link} to="/">
                        <Button variant="text" color="inherit">
                            <HomeIcon />
                        </Button>
                    </Link>
                    <Typography variant="h5" className={classes.title}>
                        Jp-bet
                    </Typography>
                    <Link className={classes.link} to="/signup">
                        <Button color="inherit">Signup</Button>
                    </Link>
                    <Link className={classes.link} to="/signin">
                        <Button color="inherit">Signin</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
