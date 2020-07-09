import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import useStyles from './styles'
import Container from '@material-ui/core/Container'

import Copyright from './Copyright'

const Footer = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <footer className={classes.footer}>
                <Container>
                    <Copyright />
                </Container>
            </footer>
        </div>
    )
}

export default Footer
