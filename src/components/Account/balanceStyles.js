import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    main: {
        width: '100%',
    },
    root: {
        width: '100%',
        maxWidth: 330,
        margin: theme.spacing(4),
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    button: {
        margin: theme.spacing(2, 6, 0),
    },
}))
