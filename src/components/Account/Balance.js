import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import PaymentIcon from '@material-ui/icons/Payment'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './balanceStyles'
import { TextField, Button } from '@material-ui/core'

const Balance = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <Typography variant="h6" className={classes.title}>
                    Your account balance
                </Typography>
            }
            className={classes.root}
        >
            <ListItem>
                <ListItemIcon>
                    <AccountBalanceIcon />
                </ListItemIcon>
                <ListItemText primary="50€" />
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <PaymentIcon />
                </ListItemIcon>
                <ListItemText primary="Deposit" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem className={classes.nested}>
                        <TextField
                            className={classes.input}
                            id="standard-number"
                            label="Amount (€)"
                            type="number"
                        />
                        <Button
                            className={classes.button}
                            variant="text"
                            size="large"
                            color="inherit"
                        >
                            <ListItemIcon>
                                <DoubleArrowIcon />
                            </ListItemIcon>
                        </Button>
                    </ListItem>
                </List>
            </Collapse>
        </List>
    )
}

export default Balance
