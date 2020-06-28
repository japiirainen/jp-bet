import { selector } from 'recoil'
import { Config } from '../../../Utils/config'
import { authTokens } from '../Atoms/userAtoms'
import jwt from 'jsonwebtoken'

const url = Config.endpoint + '/api/v1/user'

export const userStateQuery = selector({
    key: 'userStateQuery',
    get: async ({ get }) => {
        const token = get(authTokens)
        const decodedToken = jwt.decode(token)
        const response = await fetch(`${url}/${decodedToken.id}`, {
            headers: {
                'Content-Type': 'application/json',

                Authorization: `Bearer ${token}`,
            },
        })
        return await response.json()
    },
})
