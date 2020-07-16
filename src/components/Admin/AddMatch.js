import React from 'react'
import { useForm } from 'react-hook-form'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
} from '@material-ui/core'
import { postNewMatch } from '../../Utils/apiclient'

export const AddMatchModal = ({ isOpen, handleClose, tokens }) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        const newData = {
            category: data.category,
            tournament: data.tournament,
            team1: data.team1,
            team2: data.team2,
            odds: {
                team1Win: +data.team1Win,
                team2Win: +data.team2Win,
                tie: +data.tie,
            },
            matchDate: data.matchDate,
            teamLogos: {
                team1Logo: data.team1Logo,
                team2Logo: data.team2Logo,
            },
        }
        postNewMatch(newData, tokens)
            .then(() => alert('match created'))
            .catch((e) => alert(e.message))
    }

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
                    Create new match
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant="h6">basic info</Typography>

                        <TextField
                            fullWidth
                            color="secondary"
                            margin="normal"
                            id="Category"
                            label="Category"
                            variant="outlined"
                            name="category"
                            inputRef={register}
                        />
                        <TextField
                            fullWidth
                            color="secondary"
                            margin="normal"
                            id="Tournament"
                            label="Tournament"
                            variant="outlined"
                            name="tournament"
                            inputRef={register}
                        />
                        <TextField
                            fullWidth
                            color="secondary"
                            margin="normal"
                            id="team1"
                            label="team1"
                            variant="outlined"
                            name="team1"
                            inputRef={register}
                        />
                        <TextField
                            fullWidth
                            color="secondary"
                            margin="normal"
                            id="team2"
                            label="team2"
                            variant="outlined"
                            name="team2"
                            inputRef={register}
                        />
                        <Typography variant="h6">odds</Typography>
                        <TextField
                            fullWidth
                            color="secondary"
                            margin="normal"
                            id="team1Win"
                            label="team1Win"
                            variant="outlined"
                            name="team1Win"
                            inputRef={register}
                        />
                        <TextField
                            fullWidth
                            color="secondary"
                            margin="normal"
                            id="team2Win"
                            label="team2Win"
                            variant="outlined"
                            name="team2Win"
                            inputRef={register}
                        />
                        <TextField
                            fullWidth
                            color="secondary"
                            margin="normal"
                            id="tie"
                            label="tie"
                            variant="outlined"
                            name="tie"
                            inputRef={register}
                        />
                        <small>
                            this format: <br />
                            2020-10-15T08:10:00.580Z
                        </small>
                        <TextField
                            fullWidth
                            color="secondary"
                            margin="normal"
                            id="matchDate"
                            label="matchDate"
                            variant="outlined"
                            name="matchDate"
                            inputRef={register}
                        />
                        <Typography variant="h6">Team logos</Typography>
                        <TextField
                            fullWidth
                            color="secondary"
                            margin="normal"
                            id="team1Logo"
                            label="team1Logo"
                            variant="outlined"
                            name="team1Logo"
                            inputRef={register}
                        />
                        <TextField
                            fullWidth
                            color="secondary"
                            margin="normal"
                            id="team2Logo"
                            label="team2Logo"
                            variant="outlined"
                            name="team2Logo"
                            inputRef={register}
                        />
                        <Button
                            fullWidth
                            type="submit"
                            variant="outlined"
                            color="secondary"
                        >
                            Submit
                        </Button>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        variant="outlined"
                        color="secondary"
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
