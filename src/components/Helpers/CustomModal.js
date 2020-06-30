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
    open,
    setOpen,
    title,
    subtitle,
    children,
    onConfirm,
}) => {
    return (
        <>
            <Dialog
                fullWidth
                maxWidth="sm"
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="confirm-dialog"
            >
                <DialogTitle id="confirm-dialog">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{subtitle}</DialogContentText>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setOpen(false)
                            onConfirm()
                        }}
                        color="secondary"
                    >
                        Confirm
                    </Button>
                    <Button
                        onClick={() => {
                            setOpen(false)
                        }}
                        color="secondary"
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
