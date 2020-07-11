import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { authTokens } from '../../stateManagement/Recoil/Atoms/userAtoms'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const tokens = useRecoilValue(authTokens)

    return (
        <Route
            {...rest}
            render={(props) =>
                tokens ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/signin',
                            state: {
                                referer: props.location,
                            },
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute
