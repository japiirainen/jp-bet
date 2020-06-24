import React from 'react'
import { useStyles } from './betListStyles'
import FolderIcon from '@material-ui/icons/Folder'
import DeleteIcon from '@material-ui/icons/Delete'
import {
    ListItemSecondaryAction,
    IconButton,
    ListItemText,
    ListItem,
    ListItemAvatar,
    Avatar,
} from '@material-ui/core'

const BetListItem = () => {
    const classes = useStyles()

    return (
        <div className={classes.listRoot}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Single-line item" />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    )
}

export default BetListItem
