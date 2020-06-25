import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'
import {
    useAuth
} from '../../stateManagement/auth'

const PrivateRoute = ({
    component: Component,
    ...rest
}) => {
    const {
        authTokens
    } = useAuth()

    return ( <
        Route {
            ...rest
        }
        render = {
            (props) =>
            authTokens ? ( <
                Component {
                    ...props
                }
                />
            ) : ( <
                Redirect to = {
                    {
                        pathname: "/signin",
                        state: {
                            referer: props.location
                        }
                    }
                }
                />
            )
        }
        />
    )
}

export default PrivateRoute