import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
        position: 'absolute',
        top: theme.spacing(10),
        right: theme.spacing(4),
    },
}))
