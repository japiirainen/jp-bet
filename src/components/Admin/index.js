import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import Match from './SetMatchResult'
import ClosedMatchList from './ClosedMatchList'
import { LinearProgress, Divider } from '@material-ui/core'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip'
import { Alert } from '../Helpers/Alert'
import { fetchMatches } from '../../Utils/apiclient'
import {
    currentUserInfo,
    authTokens,
} from '../../stateManagement/Recoil/Atoms/userAtoms'
import { setMatchResults } from '../../Utils/apiclient'
import { useStyles } from './AdminStyles'
import { AddMatchModal } from './AddMatch'

const Admin = () => {
    const classes = useStyles()
    const user = useRecoilValue(currentUserInfo)
    const tokens = useRecoilValue(authTokens)

    const { isLoading, isError, data, error } = useQuery('adminMatchData', () =>
        fetchMatches(false)
    )
    const [dialogOpen, setDialogOpen] = useState(false)
    const handleDialog = (dialogOpen) => {
        setDialogOpen(dialogOpen)
    }

    return (
        <div>
            <Tooltip title="Create new match" aria-label="add-button">
                <Fab
                    color="primary"
                    size="medium"
                    className={classes.absolute}
                    onClick={() => handleDialog(true)}
                >
                    <AddIcon />
                </Fab>
            </Tooltip>
            <AddMatchModal
                tokens={tokens}
                isOpen={dialogOpen}
                handleClose={() => handleDialog(false)}
                handleConfirm={() => handleDialog(false)}
            />
            <h2>Set match results</h2>
            {isLoading ? (
                <div style={{ marginTop: '50px' }}>
                    <LinearProgress color="primary" />
                </div>
            ) : (
                data.map((match) => (
                    <Match
                        key={match._id}
                        {...match}
                        tokens={tokens}
                        setMatchResults={setMatchResults}
                    />
                ))
            )}
            <Divider />
            <h2>Closed matches</h2>
            <ClosedMatchList />
            {isError && <Alert severity="error"> {error.message} </Alert>}
        </div>
    )
}

export default Admin
