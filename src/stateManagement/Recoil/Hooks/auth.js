// import { useRecoilState, atom } from 'recoil'
// import { authTokens } from '../Atoms/userAtoms'
// const existingTokens = JSON.parse(localStorage.getItem('JPBET_TOKEN'))
//     const [authTokens, setAuthTokens] = useState(existingTokens)

//     const setTokens = (data) => {
//         if (!data) {
//             localStorage.removeItem('JPBET_TOKEN')
//         } else {
//             localStorage.setItem('JPBET_TOKEN', JSON.stringify(data))
//         }
//         return setAuthTokens(data)
//     }

// export const useAuthTokens = (data) => {
//     const tokens = atom({
//         key: 'authTokens',
//         default: JSON.parse(localStorage.getItem('JPBET_TOKEN')),
//     })
//     const [authTokens, setAuthTokens] = useRecoilState(tokens)

//     const setTokens = (data) => {
//         if (!data) {
//             localStorage.removeItem('JPBET_TOKEN')
//         } else {
//             localStorage.setItem('JPBET_TOKEN', JSON.stringify(data))
//         }
//         return setAuthTokens(data)
//     }
// }
