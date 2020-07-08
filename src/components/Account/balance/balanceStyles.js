import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    main: {
        width: '100%',
        margin: theme.spacing(4),
    },
    root: {
        width: '100%',
        margin: theme.spacing(4),
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    title: {
        margin: theme.spacing(4, 3, 2),
    },
    button: {
        margin: theme.spacing(2, 6, 0),
    },
    input: {
        width: '100%',
    },
}))
