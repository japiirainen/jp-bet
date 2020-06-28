import { atom } from 'recoil'

export const modalState = atom({
    key: 'modalOpen',
    default: false,
})

export const themeOpen = {
    key: 'themeOpen',
    default: 'light',
}
