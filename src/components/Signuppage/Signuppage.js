import React from 'react'
import useStyles from './styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { TextField } from '@material-ui/core'

const Signuppage = () => {
    const classes = useStyles()


    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h4" component="h2">
                    Signup
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Welcome to JP-bet! You can sign up below
                </Typography>
                <Typography variant="h5" component="p">
                    Email:
                </Typography>
                <TextField
                    className={classes.textfield}
                    id="standard-basic"
                    label="Your email"
                />
                 <Typography variant="h5" component="p">
                    Username:
                </Typography>
                <TextField
                    className={classes.textfield}
                    id="standard-basic"
                    label="Your username"
                />
                <Typography variant="h5" component="p">
                    Password:
                </Typography>
                <TextField
                    className={classes.textfield}
                    id="standard-basic"
                    label="Your password"
                />
                <Typography variant="h5" component="p">
                    Confirm password:
                </Typography>
                <TextField
                    className={classes.textfield}
                    id="standard-basic"
                    label="re-enter password"
                />
            </CardContent>
            <CardActions>
                <Button size="large">Signup</Button>
            </CardActions>
        </Card>
    )
}

export default Signuppage
