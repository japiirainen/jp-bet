import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'

export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
})

export const lightTheme = createMuiTheme({
    palette: {
        secondary: {
            main: '#b39ddb',
        },
        primary: {
            main: '#ffd600',
        },
    },
})

const main = purple[500]

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: main,
        },
        secondary: {
            main: '#f44336',
        },
    },
})
