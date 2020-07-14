import { makeStyles } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'
import blueGrey from '@material-ui/core/colors/blueGrey'

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
            theme.palette.type === 'light' ? deepPurple[200] : blueGrey[400],
    },
}))

export default useStyles
