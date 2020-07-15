import React, { useState } from 'react'
import { useSnackbar } from 'notistack'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { TextField } from '@material-ui/core'
import { CustomModal } from '../Helpers/CustomModal'
import { useFormInput } from '../Helpers/functions'

const SetMatchResult = (props) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const result = useFormInput('')
    const handleDialog = (dialogOpen) => {
        setDialogOpen(dialogOpen)
    }
    const { setMatchResults, tokens } = props
    const { enqueueSnackbar } = useSnackbar()
    const handleToast = (variant, message) => {
        enqueueSnackbar(message, {
            variant,
            preventDuplicate: true,
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            },
        })
    }
    const onClick = () => {
        handleDialog(true)
    }
    const data = {
        products: {
            onextwo: {
                result: result.value,
            },
        },
    }
    const setResult = () => {
        setMatchResults(data, props._id, tokens).then(() => {
            handleDialog(false)
            handleToast('success', 'Match result set!')
        })
    }
    return (
        <Card style={{ margin: '20px' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.team1} - {props.team2}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Match date: <br />{' '}
                    {new Date(props.matchDate).toLocaleString()}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    1x2 result: {props.products.onextwo.result}
                </Typography>
            </CardContent>

            <Button onClick={onClick} size="small" color="secondary">
                Set result
            </Button>
            <Button variant="text" size="medium" color="secondary">
                Modify
            </Button>
            <CustomModal
                isOpen={dialogOpen}
                handleClose={() => handleDialog(false)}
                handleConfirm={setResult}
                title="Please confirm that your deposit is as intended!"
            >
                <h3>
                    Set result to match: {props.team1} - {props.team2}
                </h3>
                <p>
                    1x2 choices: <br />
                    team1 - tie - team2
                </p>
                <TextField
                    color="secondary"
                    margin="normal"
                    id="firstname"
                    label="result"
                    variant="outlined"
                    name="result"
                    {...result}
                />
            </CustomModal>
        </Card>
    )
}

export default SetMatchResult
