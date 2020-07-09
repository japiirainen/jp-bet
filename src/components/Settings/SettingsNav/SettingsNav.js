import React, { useState } from 'react'
import { useStyles } from './SettingsNavStyles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { containedTabsStylesHook } from '@mui-treasury/styles/tabs'
import { useHistory } from 'react-router-dom'
import { Container } from '@material-ui/core'

const Settings = () => {
    const classes = useStyles()

    let history = useHistory()
    let initialValue
    if (history.location.pathname === '/account/balance') {
        initialValue = 0
    } else if (history.location.pathname === '/account/betlists') {
        initialValue = 1
    } else {
        initialValue = null
    }

    const linkToBalance = () => history.push('/settings/changeinfo')
    const linkToBets = () => history.push('/settings/misc')
    const [tabIndex, setTabIndex] = useState(initialValue)
    const tabsStyles = containedTabsStylesHook.useTabs()
    const tabItemStyles = containedTabsStylesHook.useTabItem()
    return (
        <Tabs
            className={classes.root}
            classes={tabsStyles}
            value={tabIndex}
            onChange={(e, index) => setTabIndex(index)}
        >
            <Tab
                classes={tabItemStyles}
                label={'Edit user info'}
                onClick={linkToBalance}
            />

            <Tab classes={tabItemStyles} label={'misc'} onClick={linkToBets} />
        </Tabs>
    )
}

export default Settings
