import { atom } from 'recoil'

export const loggedInState = atom({
    key: 'loggedInState',
    default: false,
})

export const currentUserInfo = atom({
    key: 'currentUserInfo',
    default: null,
})

export const authTokens = atom({
    key: 'authTokens',
    default: localStorage.getItem('JPBET_TOKEN'),
})
