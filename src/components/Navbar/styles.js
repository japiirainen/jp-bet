import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    },
}))

export default useStyles
