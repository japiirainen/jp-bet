import { atom, selector } from 'recoil'

export const modalOpen = atom({
    key: 'modalOpen',
    default: false
})

export const themeOpen = ({
    key: 'themeOpen',
    default: 'light'
})

