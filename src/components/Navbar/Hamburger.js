import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import { useAuth } from '../../stateManagement/auth'
import { Redirect, Link } from 'react-router-dom'
import useStyles from './styles'
import { useSetRecoilState, useRecoilState } from 'recoil'
import {
    currentUserState,
    authTokens,
} from '../../stateManagement/Recoil/Atoms/userAtoms'

const Hamburger = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const userState = useSetRecoilState(currentUserState)
    const tokens = useRecoilState(authTokens)

    const handleClose = () => {
        setAnchorEl(null)
    }

    const { setAuthTokens } = useAuth()

    function logOut() {
        userState(null)
        setAuthTokens()
        setAnchorEl(null)
        return <Redirect to="/" />
    }

    const handleAccount = () => {
        if (!tokens) return <Redirect to="/signin" />
        setAnchorEl(null)
    }
    const handleSettings = () => {
        if (!tokens) return <Redirect to="/signin" />
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MenuIcon style={{ color: 'white' }} />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link className={classes.link} to="/account">
                    <MenuItem
                        className={classes.menuItem}
                        onClick={handleAccount}
                    >
                        My Account
                    </MenuItem>
                </Link>
                <Link className={classes.link} to="/settings">
                    <MenuItem
                        className={classes.menuItem}
                        onClick={handleSettings}
                    >
                        Settings
                    </MenuItem>
                </Link>
                <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

export default Hamburger
