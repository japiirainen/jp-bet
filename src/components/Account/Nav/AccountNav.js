import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { useStyles } from './AccountNavStyles'
import Button from '@material-ui/core/Button'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import ListAltIcon from '@material-ui/icons/ListAlt'

const AccountNav = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={3}
                direction="row"
                alignItems="center"
                justify="flex-end"
            >
                <Grid item xs={'auto'} sm={'auto'}>
                    <Link to="/account/balance" className={classes.link}>
                        <Button
                            variant="text"
                            color="inherit"
                            className={classes.button}
                        >
                            Balance
                            <AccountBalanceIcon />
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={'auto'} sm={'auto'}>
                    <Link to="/account/betlists" className={classes.link}>
                        <Button
                            variant="text"
                            color="inherit"
                            className={classes.button}
                        >
                            Bets
                            <ListAltIcon />
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default AccountNav
