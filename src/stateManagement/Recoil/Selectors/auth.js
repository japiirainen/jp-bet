import { selector } from 'recoil'
import { Config } from '../../../Utils/config'
import { authTokens, currentUserInfo, loggedInState } from '../Atoms/userAtoms'
import jwt from 'jsonwebtoken'

const url = Config.endpoint + '/api/v1/user'

//maybe useEffect

export const setLoggedInState = selector({
    key: 'setLoggedInState',
    get: ({ get }) => {
        const isLogged = get(loggedInState)
        if (isLogged) {
            //todo: localstorage stuff
        }
    },
})

export const userStateQuery = selector({
    key: 'userStateQuery',
    get: async ({ get }) => {
        const token = get(authTokens)
        if (!token) return null
        const user = get(currentUserInfo)
        if (user) return user
        const decodedToken = jwt.decode(token)
        const response = await fetch(`${url}/${decodedToken.id}`, {
            headers: {
                'Content-Type': 'application/json',

                Authorization: `Bearer ${token}`,
            },
        })
        return { fetched: await response.json() }
    },
})
