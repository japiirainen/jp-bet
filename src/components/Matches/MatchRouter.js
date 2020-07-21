import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Layout, {
    Root,
    getDrawerSidebar,
    getCollapseBtn,
    getSidebarContent,
} from '@mui-treasury/layout'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import { getSidebarTrigger } from '@mui-treasury/layout'
import { useStyles } from './newMatchStyles'

const SidebarTrigger = getSidebarTrigger(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const scheme = Layout()
scheme.configureEdgeSidebar((builder) => {
    builder
        .create('unique_id', { anchor: 'left' })
        .registerTemporaryConfig('xs', {
            width: 250,
        })
})

const MatchRouter = () => {
    const classes = useStyles()

    return (
        <>
            <Root scheme={scheme}>
                <CssBaseline />
                <SidebarTrigger sidebarId="unique_id" />
                <DrawerSidebar sidebarId={'unique_id'}>
                    <SidebarContent>
                        <Link to="/counterstrike">
                            <Button
                                key="cs"
                                className={classes.button}
                                fullWidth
                            >
                                Counter-Strike
                            </Button>
                        </Link>
                    </SidebarContent>
                    <CollapseBtn />
                </DrawerSidebar>
            </Root>
        </>
    )
}

export default MatchRouter
