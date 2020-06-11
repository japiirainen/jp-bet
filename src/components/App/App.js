import React from 'react'
import Navbar from '../Navbar/Navbar'
import { ThemeProvider } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import darkTheme from './Themeprovider'

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Paper style={{ height: '100vh' }}>
                <Navbar />
            </Paper>
        </ThemeProvider>
    )
}

export default App
