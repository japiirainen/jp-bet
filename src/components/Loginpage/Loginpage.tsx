import React from 'react'
import useStyles from './styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const Loginpage: React.FC = () => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.typo}
                    variant="h4"
                    component="h2"
                >
                    Login
                </Typography>
                <Typography className={classes.typo} color="textSecondary">
                    If you have already signed up you can login below.
                </Typography>
                <Typography className={classes.typo} variant="h5" component="p">
                    Email:
                </Typography>
                <TextField
                    className={classes.input}
                    id="standard-basic"
                    label="Your email"
                />
                <Typography className={classes.typo} variant="h5" component="p">
                    Password:
                </Typography>
                <TextField
                    className={classes.input}
                    id="standard-basic"
                    label="Your password"
                />
            </CardContent>
            <CardActions>
                <Button size="large">Login</Button>
            </CardActions>
        </Card>
    )
}

export default Loginpage
