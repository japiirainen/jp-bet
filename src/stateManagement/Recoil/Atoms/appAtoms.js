import { atom } from 'recoil'

export const toastState = atom({
    key: 'toastState',
    default: false,
})

export const logoutToastState = atom({
    key: 'logoutToastState',
    default: false,
})
