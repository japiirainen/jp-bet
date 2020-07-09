import * as yup from 'yup'

const schema = yup.object().shape({
    firstname: yup.string().max(99).trim(),
    lastname: yup.string().max(99).trim(),
    email: yup.string().email().trim(),
    oldpassword: yup
        .string()
        .min(8)
        .max(100)
        .matches(/[^A-Za-z-0-9]/, 'password must contain a special character')
        .matches(/[A-Z]/, 'password must contain an uppercase letter')
        .matches(/[a-z]/, 'password must contain a lowercase letter')
        .matches(/[0-9]/, 'password must contain a number'),
})

export default schema
