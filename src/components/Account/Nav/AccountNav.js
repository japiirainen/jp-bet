import React, { useState } from 'react'
import { useStyles } from './AccountNavStyles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { containedTabsStylesHook } from '@mui-treasury/styles/tabs'
import { useHistory } from 'react-router-dom'

const AccountNav = () => {
    const classes = useStyles()

    const history = useHistory()

    const tabs = new Map([
        ['/account', 0],
        ['/account/balance', 1],
        ['/account/closedbets', 2],
    ])

    const initialValue = tabs.get(history.location.pathname.replace(/\/$/, ''))

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
