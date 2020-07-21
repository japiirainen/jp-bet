import React from 'react'
import { Card, CardContent, Typography, Divider, Fab } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create'
import { useStyles } from './newMatchStyles'

const BetProduct = ({ data }) => {
    const classes = useStyles()
    return (
        <>
            <Typography
                className={classes.productHeader}
                variant="h5"
                component="h2"
            >
                {data.team1} - {data.team2}
            </Typography>
            <Divider />
            <Card className={classes.root}>
                <CardContent className={classes.content}>
                    <Typography variant="h6" color="textPrimary" component="p">
                        Bet type: <br />{' '}
                        {data.products.onextwo.result && '1 x 2'}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Match date: <br />
                        {new Date(data.matchDate).toLocaleString()}
                    </Typography>
                </CardContent>
                <CardContent lassName={classes.root2}>
                    <Typography variant="h6" color="textPrimary" component="p">
                        Odds: <br /> {data.odds.team1Win}
                        {data.odds.team1Win}
                        {data.odds.tie}
                        {data.odds.team2Win}
                    </Typography>
                </CardContent>

                <CardContent>
                    <Fab
                        color="primary"
                        size="medium"
                        className={classes.absolute}
                    >
                        <CreateIcon />
                    </Fab>
                </CardContent>
            </Card>
        </>
    )
}

export default BetProduct
