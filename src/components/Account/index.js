import React from 'react'
import Balance from './Balance'
import { useStyles } from './styles'

const Account = () => {
    const classes = useStyles()

    return (
        <div className={classes.main}>
            <Balance />
        </div>
    )
}

export default Account
