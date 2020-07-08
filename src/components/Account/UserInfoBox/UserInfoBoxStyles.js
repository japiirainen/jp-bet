import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    avatar: {
        width: theme.spacing(16),
        height: theme.spacing(16),
    },
    fullname: {
        marginTop: theme.spacing(4),
    },
}))
