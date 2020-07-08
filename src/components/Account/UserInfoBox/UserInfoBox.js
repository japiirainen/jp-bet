import React from 'react'
import { useStyles } from './UserInfoBoxStyles'

const UserInfoBox = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <h1>Circular User Picture</h1>
            <h1>User full name</h1>
            <h1>username</h1>
        </div>
    )
}

export default UserInfoBox
