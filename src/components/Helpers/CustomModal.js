import React from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core'

export const CustomModal = ({
    isOpen,
    handleClose,
    title,
    subtitle,
    children,
    handleConfirm,
}) => {
    return (
        <>
            <Dialog
                fullWidth
                maxWidth="sm"
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{subtitle}</DialogContentText>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Close
                    </Button>
                    <Button onClick={handleConfirm} color="secondary">
                        Confirm bet
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
