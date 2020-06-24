import React from 'react'
import useFetch from '../../Utils/useFetch'
import { Config } from '../../Utils/config'
import Match from './match'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Alert } from '../Helpers/Alert'

import useStyles from './styles'

const Matches = (props) => {
  const classes = useStyles()

  const url = `${Config.endpoint}/api/v1/match`

  const { data, isLoading, hasError, errorMessage } = useFetch(url)

  return (
    <div className={classes.matchContainer}>
      {' '}
      {isLoading ? (
        <div id="foobar" className={classes.loader}>
          <LinearProgress color="secondary" />
        </div>
      ) : (
        data.map((match) => <Match key={match._id} {...match} />)
      )}{' '}
      {hasError && <Alert severity="error"> {errorMessage} </Alert>}{' '}
    </div>
  )
}

export default Matches
