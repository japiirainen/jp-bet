import { createMuiTheme } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'
import deepOrange from '@material-ui/core/colors/deepOrange'
import blueGrey from '@material-ui/core/colors/blueGrey'
import grey from '@material-ui/core/colors/blueGrey'

export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: blueGrey[400],
        },
        secondary: {
            main: grey[500],
        },
    },
})

export const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: deepOrange[600],
        },
        secondary: {
            main: deepPurple[300],
        },
    },
})
