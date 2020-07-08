import React from 'react'
import { useStyles } from './UserInfoBoxStyles'
import { Typography, Avatar } from '@material-ui/core/'

const UserInfoBox = ({ user }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.img}>
                <Avatar
                    alt="profile pic"
                    src={user.pictureurl}
                    className={classes.avatar}
                />
            </div>
            <Typography variant="h4" className={classes.fullname}>
                {user.firstname} {user.lastname}
            </Typography>
            <Typography className={classes.username}>
                {user.username}
            </Typography>
        </div>
    )
}

export default UserInfoBox
