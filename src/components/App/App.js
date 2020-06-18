import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Matches from '../Matches'
import Loginpage from '../Signinpage/Signinpage'
import Signuppage from '../Signuppage/Signuppage'
import PrivateRoute from '../PrivateRoute'
import Admin from '../Admin'
import Account from '../Account'
import Settings from '../Settings'
//import Footer from '../Footer'
import { ThemeProvider } from '@material-ui/core/styles'
import { Paper, Container } from '@material-ui/core'
import { lightTheme } from './Themeprovider'
import { AuthContext } from '../../context/auth'

const App = (props) => {
    const existingTokens = JSON.parse(localStorage.getItem('JPBET_TOKEN'))
    const [authTokens, setAuthTokens] = useState(existingTokens)

    const setTokens = (data) => {
        localStorage.setItem('JPBET_TOKEN', JSON.stringify(data))
        setAuthTokens(data)
    }

    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            <ThemeProvider theme={lightTheme}>
                <Paper style={{ height: '100vh' }}>
                    <Navbar />
                    <Container maxWidth="sm">
                        <Switch>
                            <Route exact path="/" component={Matches} />

                            <Route path="/signin" component={Loginpage} />

                            <Route path="/signup" component={Signuppage} />

                            <PrivateRoute path="/admin" component={Admin} />

                            <PrivateRoute path="/account" component={Account} />

                            <PrivateRoute
                                path="/settings"
                                component={Settings}
                            />
                        </Switch>
                    </Container>
                </Paper>
            </ThemeProvider>
        </AuthContext.Provider>
    )
}

export default App
