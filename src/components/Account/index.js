import React from 'react'
import { Switch, useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Grid from '@material-ui/core/Grid'
import UserInfoBox from './UserInfoBox/UserInfoBox'
import { Divider } from '@material-ui/core'
import AccountNav from './Nav/AccountNav'
import Balance from './balance/Balance'
import BetList from './BetList/BetList'
import ClosedBetList from './BetList/ClosedBetList'
import { useStyles } from './balance/balanceStyles'
import PrivateRoute from '../PrivateRoute'
import { currentUserInfo } from '../../stateManagement/Recoil/Atoms/userAtoms'

const Account = () => {
    const classes = useStyles()

    const user = useRecoilValue(currentUserInfo)

    const location = useLocation()

    return (
        <div className={classes.main}>
            <Grid container>
                <Grid item md={4} sm={3} xs={12}>
                    <UserInfoBox user={user} />
                </Grid>
                <Grid item md={8} sm={8} xs={10}>
                    <AccountNav />
                    <Divider />
                    {location.pathname === '/account/' && <BetList />}
                    <Switch>
                        <PrivateRoute
                            path="/account/balance"
                            component={Balance}
                        />
                        <PrivateRoute
                            path="/account/closedbets"
                            component={ClosedBetList}
                        />
                    </Switch>
                </Grid>
            </Grid>
        </div>
    )
}

export default Account
