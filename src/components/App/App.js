import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Matches from '../Matches'
import Loginpage from '../Signinpage/Signinpage'
import Signuppage from '../Signuppage/Signuppage'
import Footer from '../Footer'
import { ThemeProvider } from '@material-ui/core/styles'
import { Paper, Container } from '@material-ui/core'
import { lightTheme } from './Themeprovider'

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Paper style={{ height: '100vh' }}>
                <Navbar />
                <Container maxWidth="sm">
                    <Switch>
                        <Route exact path="/">
                            <Matches />
                        </Route>
                        <Route path="/signin">
                            <Loginpage />
                        </Route>
                        <Route path="/signup">
                            <Signuppage />
                        </Route>
                    </Switch>
                </Container>
                <Footer />
            </Paper>
        </ThemeProvider>
    )
}

export default App
