import React from 'react'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import Match from './SetMatchResult'
import ClosedMatchList from './ClosedMatchList'
import { LinearProgress, Divider } from '@material-ui/core'
import { Alert } from '../Helpers/Alert'
import { fetchMatches } from '../../Utils/apiclient'
import {
    currentUserInfo,
    authTokens,
} from '../../stateManagement/Recoil/Atoms/userAtoms'
import { setMatchResults } from '../../Utils/apiclient'

const Admin = () => {
    const user = useRecoilValue(currentUserInfo)
    const tokens = useRecoilValue(authTokens)

    const { isLoading, isError, data, error } = useQuery('adminMatchData', () =>
        fetchMatches(false)
    )

    return (
        <div>
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
