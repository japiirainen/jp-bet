import React from 'react'
import useStyles from './styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Loginpage: React.FC = () => {
    const classes = useStyles()
    const bull = <span className={classes.bullet}>•</span>

    return (
        <Card className={classes.root}>
            <CardContent>
              
                <Typography variant="h5" component="h2">
                    Login below
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large">Login</Button>
            </CardActions>
        </Card>
    )
}

export default Loginpage
