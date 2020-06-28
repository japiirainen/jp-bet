import { atom } from 'recoil'

export const currentUserState = atom({
    key: 'currentUserState',
    default: null,
})

export const authTokens = atom({
    key: 'authTokens',
    default: JSON.parse(localStorage.getItem('JPBET_TOKEN')),
})
