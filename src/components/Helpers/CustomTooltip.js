import { withStyles } from '@material-ui/core/styles'

import Tooltip from '@material-ui/core/Tooltip'

export const CustomTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#ecf2ff',
        color: '#003399',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(14),
        border: '1px solid #dadde9',
    },
}))(Tooltip)
