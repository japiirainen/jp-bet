import React from 'react'
import MyTextField from './TextField'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'

const ChangeInfoForm = () => {
    return (
        <Container maxWidth="xs">
            <Grid container>
                <Grid item>
                    <MyTextField />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ChangeInfoForm
