import React from 'react'
import { Typography, Link } from '@material-ui/core'

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link target= '_blank' color="inherit" href="https://joonapiirainen.com/">
                JP-bet
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}


export default  Copyright