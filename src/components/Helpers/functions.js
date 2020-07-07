import { useState } from 'react'

const R = require('ramda')

export const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    function handleChange(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange,
    }
}

export const calculateReturn = (odds, amount) => {
    const result = R.multiply(odds, parseFloat(amount))
    return result
}
