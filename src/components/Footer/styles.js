import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(4),
    },
    footer: {
        color: 'black',
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        opacity: '80%',
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[800],
    },
}))

export default useStyles
