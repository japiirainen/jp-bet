import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(3),
        },
        title: {
            flexGrow: 1,
            textAlign: 'center',
        },
        link : {
            textDecoration: 'none',
            color: 'white'
            
        }
    })
)

export default useStyles
