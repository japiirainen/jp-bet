import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'
import Container from '@material-ui/core/Container'
import Grow from '@material-ui/core/Grow'
import Copyright from './Copyright'

const Footer = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="xl">
                <Grow in>
                    <footer className={classes.footer}>
                        <Container maxWidth="sm">
                            <Typography variant="body1">
                                My placeholder text. need to think what to put
                                here
                            </Typography>
                            <Copyright />
                        </Container>
                    </footer>
                </Grow>
            </Container>
        </div>
    )
}

export default Footer
