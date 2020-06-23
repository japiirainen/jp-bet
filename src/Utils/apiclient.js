import { Config } from './config'

export const endpoint = Config.endpoint
export const token = Config.token

export async function getMatches(authToken) {
    const resp = await fetch(`${endpoint}/api/v1/match`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZGY2M2Y0M2M2MTU3MjYzMjg5NGY0NyIsImlhdCI6MTU5MTY5ODQyMCwiZXhwIjoxNjAwMzM4NDIwfQ.rp-VE6oqGqqMIlRutzOHtnknEPqv3w4UY5yg5UQZ568',
        },
    })
    return (await resp.json()).data
}

export const onSignup = async (data) => {
    try {
        const resp = await fetch(`${endpoint}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(data),
        })
        if (!resp.ok) {
            throw new Error('Signup failed')
        }
        return resp.json()
    } catch (e) {
        console.error(e)
        throw e
    }
}

export const onSignin = async (data) => {
    try {
        const resp = await fetch(`${endpoint}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        if (!resp.ok) {
            throw new Error('Signup failed')
        }
        return resp.json()
    } catch (e) {
        console.error(e)
        throw e
    }
}
