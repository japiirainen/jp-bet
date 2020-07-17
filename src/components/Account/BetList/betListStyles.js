import { makeStyles } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/lightGreen'
import red from '@material-ui/core/colors/red'

export const useStyles = makeStyles(({ spacing, palette }) => {
    const family =
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    return {
        card: {
            display: 'flex',
            padding: spacing(2),
            margin: spacing(2),
            maxWidth: '100%',
            borderRadius: 12,
            boxShadow: '0 4px 8px 0 rgba(138, 148, 159, 0.2)',
            '& > *:nth-child(1)': {
                marginRight: spacing(2),
            },
            '& > *:nth-child(2)': {
                flex: 'auto',
            },
        },
        heading: {
            fontFamily: family,
            fontSize: 16,
            marginBottom: 0,
        },
        subheader: {
            fontFamily: family,
            fontSize: 16,
            color: palette.grey[800],
            letterSpacing: '1px',
            marginBottom: 4,
        },
        value: {
            marginLeft: 8,
            fontSize: 14,
            color: palette.grey[500],
        },
        header: {
            margin: spacing(4),
        },
        fabSuccess: {
            marginLeft: spacing(6),
            backgroundColor: green[700],
            fontSize: spacing(2),
            color: '#fafafa',
        },
        fabDanger: {
            marginLeft: spacing(6),
            backgroundColor: red[400],
            fontSize: spacing(2),
            color: '#fafafa',
        },
        icon: {
            color: '#fafafa',
        },
    }
})
