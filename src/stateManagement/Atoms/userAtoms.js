import {
    atom,
    selector
} from 'recoil'

export const userState = atom({
    key: 'userState',
    default: {},
})

export const userName = selector({
    key: 'userName',
    get: ({})
})