import { selector } from 'recoil'
import useFetch from '../../../Utils/useFetch'
import { Config } from '../../../Utils/config'
import { useAuth } from '../../auth'
import { currentUserId } from '../Atoms/userAtoms'

const { authTokens } = useAuth()
const userId = authTokens.id
const url = Config.endpoint + `/api/v1/user/${userId}`

export const currentUserDetails = selector({
    key: 'currentUserDetails',
    get: async ({ get }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { data } = await useFetch(get(url + currentUserId))
        return data
    },
})
