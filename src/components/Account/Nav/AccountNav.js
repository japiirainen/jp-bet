import React, { useState } from 'react'
import { useStyles } from './AccountNavStyles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { containedTabsStylesHook } from '@mui-treasury/styles/tabs'
import { useHistory } from 'react-router-dom'

const AccountNav = () => {
    const classes = useStyles()

    let history = useHistory()
    let initialValue
    if (history.location.pathname === '/account/balance') {
        initialValue = 2
    } else if (history.location.pathname === '/account/closedBets') {
        initialValue = 1
    } else {
        initialValue = 0
    }

    const linkToBets = () => history.push('/account/')
    const linkToBalance = () => history.push('/account/balance')
    const linkToClosedBets = () => history.push('/account/closedbets')

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
            <Tab classes={tabItemStyles} label={'Bets'} onClick={linkToBets} />
            <Tab
                classes={tabItemStyles}
                label={'Balance'}
                onClick={linkToBalance}
            />

            <Tab
                classes={tabItemStyles}
                label={'Closed bets'}
                onClick={linkToClosedBets}
            />
        </Tabs>
    )
}

export default AccountNav
