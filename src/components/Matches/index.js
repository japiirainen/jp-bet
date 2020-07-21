import React from 'react'
import { useQuery } from 'react-query'
import Match from './match'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Alert } from '../Helpers/Alert'
import { fetchMatches } from '../../Utils/apiclient'
import useStyles from './styles'
import { Container } from '@material-ui/core'
import styled from 'styled-components'
import Layout, {
    Root,
    getDrawerSidebar,
    getCollapseBtn,
    getSidebarContent,
} from '@mui-treasury/layout'
import Button from '@material-ui/core/Button'
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing'
import CssBaseline from '@material-ui/core/CssBaseline'
import { getSidebarTrigger } from '@mui-treasury/layout'
import MatchCard from './newMatch'

const SidebarTrigger = getSidebarTrigger(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const scheme = Layout()
scheme.configureEdgeSidebar((builder) => {
    builder
        .create('unique_id', { anchor: 'left' })
        .registerTemporaryConfig('md', {
            width: 250,
        })
})

const Matches = () => {
    const classes = useStyles()
    const buttonStyle = usePushingGutterStyles()
    const { isLoading, isError, data, error } = useQuery(
        'matchData',
        fetchMatches
    )

    return (
        <>
            <Root scheme={scheme}>
                <CssBaseline />
                <SidebarTrigger sidebarId="unique_id" />
                <DrawerSidebar sidebarId={'unique_id'}>
                    <SidebarContent>
                        <Button
                            fullWidth
                            className={classes.button}
                            classes={buttonStyle}
                        >
                            Counter-Strike
                        </Button>
                    </SidebarContent>
                    <CollapseBtn />
                </DrawerSidebar>
            </Root>
            <Container maxWidth="sm">
                <div className={classes.matchContainer}>
                    {isLoading ? (
                        <div className={classes.loader}>
                            <LinearProgress color="primary" />
                        </div>
                    ) : (
                        data.map((match) => (
                            <Match key={match._id} {...match} />
                        ))
                    )}
                    {isError && (
                        <Alert className={classes.alert} severity="error">
                            {' '}
                            {error.message}{' '}
                        </Alert>
                    )}
                </div>
            </Container>
        </>
    )
}

export default Matches
