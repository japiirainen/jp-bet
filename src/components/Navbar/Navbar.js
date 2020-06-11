import React from 'react'
import useStyles from './styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Link className={classes.link} to="/">
                        <Button variant="text" color="inherit">
                            Home
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
