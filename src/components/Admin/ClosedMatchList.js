import React from 'react'
import { useQuery } from 'react-query'
import { fetchMatches } from '../../Utils/apiclient'
import { LinearProgress } from '@material-ui/core'
import ClosedMatch from './ClosedMatch'
import { Alert } from '../Helpers/Alert'

const ClosedMatchList = () => {
    const { isLoading, isError, data, error } = useQuery(
        'adminMatchDataClosed',
        () => fetchMatches(true)
    )

    return (
        <div>
            {isLoading ? (
                <div style={{ marginTop: '50px' }}>
                    <LinearProgress color="primary" />
                </div>
            ) : (
                data.map((match) => <ClosedMatch key={match._id} {...match} />)
            )}

            {isError && <Alert severity="error"> {error.message} </Alert>}
        </div>
    )
}

export default ClosedMatchList
