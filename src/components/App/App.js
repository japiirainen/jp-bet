import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Navbar from '../Navbar/Navbar'
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
import { userStateQuery } from '../../stateManagement/Recoil/Selectors/auth'
import { currentUserInfo } from '../../stateManagement/Recoil/Atoms/userAtoms'
import { useSetRecoilState, useRecoilValueLoadable } from 'recoil'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../Helpers/ErrorFallback'
import MatchRenderer from '../Matches/MatchRenderer'
import MatchRouter from '../Matches/MatchRouter'
import Home from '../Home'
import MatchBetting from '../Matches/MatchBetting'

const App = () => {
    const classes = useStyles()
    const [loading, setLoading] = useState(false)

    //putting user into recoil state
    const setUser = useSetRecoilState(currentUserInfo)
    const user = useRecoilValueLoadable(userStateQuery)

    useEffect(() => {
        if (user.state === 'hasValue') {
            setUser(user.contents)
        } else if (user.state === 'loading') {
            setLoading(true)
        }
    }, [setUser, user.contents, user.state])

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <ThemeProvider theme={lightTheme}>
                    <Paper>
                        <Navbar />
                        <Container
                            maxWidth="lg"
                            className={classes.mainContainer}
                        >
                            <MatchRouter />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route
                                    exact
                                    path="/counterstrike"
                                    component={MatchRenderer}
                                />
                                <PrivateRoute
                                    path="/counterstrike/:id"
                                    component={MatchBetting}
                                />
                                <Route path="/signin" component={Signinpage} />
                                <Route path="/signup" component={Signuppage} />
                                <PrivateRoute path="/admin" component={Admin} />
                                <PrivateRoute
                                    path="/account/"
                                    component={Account}
                                />
                                <PrivateRoute
                                    path="/settings/"
                                    component={Settings}
                                />
                                {loading && <LinearProgress color="primary" />}
                            </Switch>
                        </Container>
                        <Footer />
                    </Paper>
                </ThemeProvider>
            </SnackbarProvider>
        </ErrorBoundary>
    )
}

export default App
