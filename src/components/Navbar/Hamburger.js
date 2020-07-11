import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import { useHistory, Link } from 'react-router-dom'
import useStyles from './styles'
import { useSetRecoilState } from 'recoil'
import {
    currentUserInfo,
    authTokens,
} from '../../stateManagement/Recoil/Atoms/userAtoms'

const Hamburger = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
    const history = useHistory()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const setUser = useSetRecoilState(currentUserInfo)
    const setTokens = useSetRecoilState(authTokens)

    const handleClose = () => {
        setAnchorEl(null)
    }

    function logOut() {
        setUser(null)
        setTokens()
        setAnchorEl(null)
        history.push('/')
    }

    const handleAccount = () => {
        history.push('/signin')
        setAnchorEl(null)
    }
    const handleSettings = () => {
        history.push('/signin')
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
                <Link className={classes.link} to="/account/">
                    <MenuItem
                        className={classes.menuItem}
                        onClick={handleAccount}
                    >
                        My Account
                    </MenuItem>
                </Link>
                <Link className={classes.link} to="/settings/">
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
