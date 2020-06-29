import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Matches from '../Matches'
import Signinpage from '../Signinpage/Signinpage'
import Signuppage from '../Signuppage/Signuppage'
import PrivateRoute from '../PrivateRoute'
import Admin from '../Admin'
import Account from '../Account'
import Settings from '../Settings'
import Footer from '../Footer'
import { useStyles } from './styles'
import { ThemeProvider } from '@material-ui/core/styles'
import { Paper, Container, LinearProgress } from '@material-ui/core'
import { lightTheme } from './Themeprovider'
import { AuthContext } from '../../stateManagement/auth'
import { userStateQuery } from '../../stateManagement/Recoil/Selectors/auth'
import { currentUserState } from '../../stateManagement/Recoil/Atoms/userAtoms'
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import { Alert } from '../Helpers/Alert'

const App = () => {
    const classes = useStyles()

    const existingTokens = JSON.parse(localStorage.getItem('JPBET_TOKEN'))
    const [authTokens, setAuthTokens] = useState(existingTokens)

    const setTokens = (data) => {
        if (!data) {
            localStorage.removeItem('JPBET_TOKEN')
        } else {
            localStorage.setItem('JPBET_TOKEN', JSON.stringify(data))
        }
        return setAuthTokens(data)
    }

    //putting user into recoil state
    const setUser = useSetRecoilState(currentUserState)
    const user = useRecoilValueLoadable(userStateQuery)
    if (user.state === 'hasValue') {
        setUser(user.contents ? user.contents.data : null)
    } else if (user.state === 'loading') {
        return <LinearProgress color="secondary" />
    } else {
        return <Alert severity="error"> {user.contents} </Alert>
    }

    return (
        <AuthContext.Provider
            value={{
                authTokens,
                setAuthTokens: setTokens,
            }}
        >
            <ThemeProvider theme={lightTheme}>
                <Paper>
                    <Navbar />
                    <Container maxWidth="sm" className={classes.mainContainer}>
                        <Switch>
                            <Route exact path="/" component={Matches} />
                            <Route path="/signin" component={Signinpage} />
                            <Route path="/signup" component={Signuppage} />
                            <PrivateRoute path="/admin" component={Admin} />
                            <PrivateRoute path="/account" component={Account} />
                            <PrivateRoute
                                path="/settings"
                                component={Settings}
                            />
                        </Switch>
                    </Container>
                    <Footer />
                </Paper>
            </ThemeProvider>
        </AuthContext.Provider>
    )
}

export default App
