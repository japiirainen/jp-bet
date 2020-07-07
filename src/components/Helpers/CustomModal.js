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
    title,
    subtitle,
    children,
    handleConfirm,
    handleClose,
}) => {
    return (
        <>
            <Dialog
                fullWidth
                maxWidth="sm"
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="confirm-dialog"
            >
                <DialogTitle id="confirm-dialog" variant="h2">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>{subtitle}</DialogContentText>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirm} color="secondary">
                        Confirm
                    </Button>
                    <Button onClick={handleClose} color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
