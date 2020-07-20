import { makeStyles } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/lightGreen'
import blue from '@material-ui/core/colors/blue'

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
    loader: {
        marginTop: theme.spacing(6),
    },
    fabSuccess: {
        marginLeft: theme.spacing(6),
        backgroundColor: green[700],
        fontSize: theme.spacing(2),
        color: '#fafafa',
    },
    fabBlue: {
        marginLeft: theme.spacing(6),
        backgroundColor: blue[500],
        fontSize: theme.spacing(2),
        color: '#fafafa',
    },
    box: {
        margin: theme.spacing(1),
    },
    card: {
        margin: theme.spacing(1),
    },
    icon: {
        color: '#fafafa',
    },
}))
