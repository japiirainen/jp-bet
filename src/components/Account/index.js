import React from 'react'
import { Switch } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import UserInfoBox from './UserInfoBox/UserInfoBox'
import AccountNav from './Nav/AccountNav'
import Balance from './balance/Balance'
import OpenBetList from './BetList/OpenBetList'
import { useStyles } from './balance/balanceStyles'
import PrivateRoute from '../PrivateRoute'
import { Divider } from '@material-ui/core'

const Account = () => {
    const classes = useStyles()

    return (
        <div className={classes.main}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <AccountNav />
                    <Divider />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={4} sm={4}>
                    <UserInfoBox />
                </Grid>

                <Switch>
                    <Grid item xs={8} sm={8}>
                        <PrivateRoute
                            path="/account/balance"
                            component={Balance}
                        />
                        <PrivateRoute
                            path="/account/betlists"
                            component={OpenBetList}
                        />
                    </Grid>
                </Switch>
            </Grid>
        </div>
    )
}

export default Account
