import * as yup from 'yup'

const schema = yup.object().shape({
    firstname: yup.string().max(99).trim().required(),
    lastname: yup.string().max(99).trim().required(),
    username: yup.string().max(15).trim().required(),
    email: yup.string().email().trim().required(),
    password: yup
        .string()
        .min(8)
        .max(100)
        .matches(/[^A-Za-z-0-9]/, 'password must contain a special character')
        .matches(/[A-Z]/, 'password must contain an uppercase letter')
        .matches(/[a-z]/, 'password must contain a lowercase letter')
        .matches(/[0-9]/, 'password must contain a number'),
    confirmPassword: yup.string().when('password', {
        is: (password) => (password && password.length > 0 ? true : false),
        then: yup
            .string()
            .oneOf([yup.ref('password')], "Password doesn't match"),
    }),
})

export default schema
