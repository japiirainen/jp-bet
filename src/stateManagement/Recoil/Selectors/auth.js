import { selector } from 'recoil'
import { Config } from '../../../Utils/config'
import { authTokens, currentUserState } from '../Atoms/userAtoms'
import jwt from 'jsonwebtoken'

const url = Config.endpoint + '/api/v1/user'

//maybe useEffect

export const userStateQuery = selector({
    key: 'userStateQuery',
    get: async ({ get }) => {
        const token = get(authTokens)
        if (!token) return null
        const user = get(currentUserState)
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
