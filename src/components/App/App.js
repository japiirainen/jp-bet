import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Matches from '../Matches'
import Loginpage from '../Signinpage/Signinpage'
import Signuppage from '../Signuppage/Signuppage'
import PrivateRoute from '../PrivateRoute'
import Admin from '../Admin'
//import Footer from '../Footer'
import { ThemeProvider } from '@material-ui/core/styles'
import { Paper, Container } from '@material-ui/core'
import { lightTheme } from './Themeprovider'
import { AuthContext } from '../../context/auth'

const App = () => {
    return (
        <AuthContext.Provider value={false}>
            <ThemeProvider theme={lightTheme}>
                <Paper style={{ height: '100vh' }}>
                    <Navbar />
                    <Container maxWidth="sm">
                        <Switch>
                            <Route exact path="/" component={Matches} />

                            <Route path="/signin" component={Loginpage} />

                            <Route path="/signup" component={Signuppage} />

                            <PrivateRoute path="/admin" component={Admin} />
                        </Switch>
                    </Container>
                </Paper>
            </ThemeProvider>
        </AuthContext.Provider>
    )
}

export default App
