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
    },
    fullname: {
        marginTop: theme.spacing(4),
    },
}))
