import {
    makeStyles
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        color: theme.palette.text.primary,
    },
    item: {
        fontSize: theme.typography.pxToRem(18),
        color: theme.palette.text.primary,
    },
    odds: {
        marginBottom: theme.spacing(4),
    },
    oddsNames: {
        marginTop: theme.spacing(4),
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    matchContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    loader: {
        marginTop: theme.spacing(6),
    },
  
}))

export default useStyles