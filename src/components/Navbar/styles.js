import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black',
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        color: 'white',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    },
    menuItem: {
        color: 'black',
    },
}))

export default useStyles
