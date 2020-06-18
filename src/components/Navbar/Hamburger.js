import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth } from '../../context/auth'
import { Redirect } from 'react-router-dom'



const Hamburger = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { setAuthTokens, authTokens } = useAuth()

  const handleLogOut = () => {
    setAuthTokens(localStorage.clear())
    return <Redirect to="/"/>
}

    const handleAccount = () => {
        if (authTokens) return <Redirect to="/account"/>
    }
    const handleSettings = () => {
        if (authTokens) return <Redirect to="settings" />
    }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon style={{ color: 'white' }} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleAccount}>My Account</MenuItem>
        <MenuItem onClick={handleSettings}>Settings</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default Hamburger