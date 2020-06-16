import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'
import Container from '@material-ui/core/Container'
import Slide from '@material-ui/core/Slide';
import Copyright from './Copyright'




const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />    
      <Slide direction="up" in>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container>
      </footer>
      </Slide>
    </div>
  );
}

export default Footer