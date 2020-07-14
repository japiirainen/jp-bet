import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    img: {
        width: '80%',
        height: '80%',
    },
    avatar: {
        width: '100%',
        height: '100%',
        maxHeight: theme.spacing(25),
        maxWidth: theme.spacing(25),
    },
    fullname: {
        marginTop: theme.spacing(4),
        width: '80%',
        height: '100%',
    },
    userItem: {
        margin: theme.spacing(1),
    },
}))
