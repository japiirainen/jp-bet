import React from 'react'
import { Switch } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'
import SettingsNav from './SettingsNav/SettingsNav'
import ChangeInfoForm from './Form/ChangeInfoForm'
import MiscSettings from './Misc/MiscSettings'
import { Divider } from '@material-ui/core'

const Settings = () => {
    return (
        <>
            <SettingsNav />
            <Divider />
            <Switch>
                <PrivateRoute
                    path="/settings/changeinfo"
                    component={ChangeInfoForm}
                />
                <PrivateRoute path="/settings/misc" component={MiscSettings} />
            </Switch>
        </>
    )
}

export default Settings
