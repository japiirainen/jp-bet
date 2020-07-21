import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

const mainColor = '#003399'
const lightColor = '#ecf2ff'
const borderRadius = 12

export const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
    card: {
        overflow: 'visible',
        background: 'none',
        display: 'flex',
        minWidth: 343,
        minHeight: 150,
        filter: 'drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3))',
        '& $moveLeft, $moveRight': {
            transition: '0.3s',
        },
        '&:hover': {
            '& $moveLeft': {
                transform: 'translateX(-8px)',
            },
            '& $moveRight': {
                transform: 'translateX(8px)',
            },
        },
        [breakpoints.up('sm')]: {
            minWidth: 400,
        },
        marginTop: spacing(8),
    },
    left: {
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        flexBasis: '33.33%',
        display: 'flex',
        backgroundColor: '#fff',
    },
    media: {
        margin: 'auto',
        width: 80,
        height: 80,
        borderRadius: '50%',
    },
    right: {
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        flex: 1,
        padding: 12,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: lightColor,
    },
    label: {
        padding: '0 8px',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 0,
        marginBottom: 4,
    },
    avatar: {
        width: 30,
        height: 30,
        margin: 0,
        color: palette.text.secondary,
    },
    path: {
        flex: 1,
        flexBasis: 72,
        padding: '0 4px',
    },
    line: {
        position: 'relative',
        margin: '20px 0 16px',
        borderBottom: '1px dashed rgba(0,0,0,0.38)',
    },
    plane: {
        position: 'absolute',
        display: 'inline-block',
        padding: '0 4px',
        fontSize: 32,
        backgroundColor: lightColor,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(90deg)',
    },
    matchDate: {
        fontSize: 12,
        lineHeight: '24px',
        minWidth: 48,
        padding: '0 8px',
        borderRadius: 10,
        backgroundColor: '#bed0f5',
        color: mainColor,
        display: 'block',
        marginBottom: spacing(2),
    },
    link: {
        color: palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    button: {
        marginTop: spacing(1),
        color: grey[800],
    },
    alert: {
        marginTop: spacing(6),
    },
    loader: {
        marginTop: spacing(6),
    },
    productHeader: {
        textAlign: 'center',
        marginBottom: spacing(3),
    },
    absolute: {
        textAlign: 'flex-end',
    },
    root: {
        display: 'flex',
        margin: spacing(5),
    },
    root2: {
        marginLeft: spacing(4),
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
    moveLeft: {},
    moveRight: {},
}))
