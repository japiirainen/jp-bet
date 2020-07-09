import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import FormHeader from './FormHeader'
import Grid from '@material-ui/core/Grid'
import { Container, TextField, Button } from '@material-ui/core'
import { useStyles } from './FormStyles'
import schema from './Validation'

const ChangeInfoForm = () => {
    const classes = useStyles()
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className={classes.main}>
            <Container maxWidth="xs">
                <Grid container>
                    <FormHeader />
                    <Grid item md={12} sm={12} xs={12}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                color="secondary"
                                margin="normal"
                                id="outlined-basic"
                                label="First Name"
                                variant="outlined"
                                helperText={errors.firstname?.message}
                                error={Boolean(errors.firstname?.message)}
                                fullWidth
                                name="firstname"
                                inputRef={register({ min: 2, max: 99 })}
                            />
                            <TextField
                                color="secondary"
                                margin="normal"
                                id="outlined-basic"
                                label="Last Name"
                                variant="outlined"
                                helperText={errors.lastname?.message}
                                error={Boolean(errors.lastname?.message)}
                                fullWidth
                                name="lastname"
                                inputRef={register}
                            />
                            <TextField
                                color="secondary"
                                margin="normal"
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                helperText={errors.email?.message}
                                error={Boolean(errors.email?.message)}
                                fullWidth
                                name="email"
                                inputRef={register}
                            />
                            <TextField
                                color="secondary"
                                margin="normal"
                                id="outlined-basic"
                                label="new password"
                                variant="outlined"
                                helperText={errors.oldpassword?.message}
                                error={Boolean(errors.oldpassword?.message)}
                                fullWidth
                                name="newpassword"
                                inputRef={register}
                            />
                            <TextField
                                color="secondary"
                                margin="normal"
                                id="outlined-basic"
                                label="confirm password"
                                variant="outlined"
                                helperText={errors.confirmpassword?.message}
                                error={Boolean(errors.confirmpassword?.message)}
                                fullWidth
                                name="confirmpassword"
                                inputRef={register}
                            />

                            <Button
                                variant="outlined"
                                type="submit"
                                color="secondary"
                                size="large"
                                fullWidth
                            >
                                Submit
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ChangeInfoForm
