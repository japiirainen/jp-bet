import { atom } from 'recoil'

export const currentUserId = atom({
    key: 'currentUserState',
    default: 1,
})
