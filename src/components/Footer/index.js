import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
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
          <Typography variant="body1">
            My placeholder text. need to think what to put here
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  )
}

export default Footer
