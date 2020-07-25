import React from 'react'

import CardHeader from '@material-ui/core/CardHeader'

const FormHeader = ({ subheader, title }) => {
    return <CardHeader title={title} subheader={subheader} />
}

export default FormHeader
