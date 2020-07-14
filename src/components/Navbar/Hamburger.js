import React, { useState, useEffect } from 'react'
import { useSetRecoilState, useRecoilState } from 'recoil'
import { useSnackbar } from 'notistack'
import { useHistory, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './styles'
import {
    currentUserInfo,
    authTokens,
} from '../../stateManagement/Recoil/Atoms/userAtoms'
import { logoutToastState } from '../../stateManagement/Recoil/Atoms/appAtoms'

const Hamburger = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
    const history = useHistory()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const [notification, setNotification] = useRecoilState(logoutToastState)
    const { enqueueSnackbar } = useSnackbar()

    const setUser = useSetRecoilState(currentUserInfo)
    const setTokens = useSetRecoilState(authTokens)

    const handleClose = () => {
        setAnchorEl(null)
    }

    function logOut() {
        localStorage.removeItem('JPBET_TOKEN')
        setNotification(true)
        setUser(null)
        setTokens()
        setAnchorEl(null)
        history.push('/')
    }

    const handleAccount = () => {
        setAnchorEl(null)
    }
    const handleSettings = () => {
        setAnchorEl(null)
    }
    useEffect(() => {
        const handleToast = (variant) => {
            enqueueSnackbar('Signed out.', {
                variant,
                preventDuplicate: true,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                },
                onClose: () => {
                    setNotification(false)
                },
            })
        }

        if (notification) {
            handleToast('info')
        }
    }, [notification, enqueueSnackbar, setNotification])

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
