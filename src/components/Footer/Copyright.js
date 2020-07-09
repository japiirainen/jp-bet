import React from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary">
            {' '}
            {'Design and build by'}{' '}
            <Link
                color="inherit"
                target="_blank"
                href="https://joonapiirainen.com"
            >
                Joona{' '}
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    )
}

export default Copyright
