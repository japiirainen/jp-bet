import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const SetMatchResult = (props) => {
    return (
        <Card style={{ margin: '20px' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.team1} - {props.team2}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Match date: <br />{' '}
                    {new Date(props.matchDate).toLocaleString()}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    1x2 result: {props.products.onextwo.result}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default SetMatchResult
