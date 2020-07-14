import { Config } from './config'

export const endpoint = Config.endpoint
export const token = Config.token

export const fetchMatches = async () => {
    const resp = await fetch(`${endpoint}/api/v1/match`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
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

export const fetchSignin = async (data) => {
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

export const postBetSlip = async (data, userId, token) => {
    try {
        const resp = await fetch(`${endpoint}/api/v1/betslip/user/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
        if (!resp.ok && resp.status === 400) {
            throw new Error('Balance is too low!')
        }
        return resp.json()
    } catch (e) {
        console.error(e)
        throw e
    }
}

export const updateUserBalance = async (data, userId, token) => {
    try {
        const resp = await fetch(
            `${endpoint}/api/v1/user/incBalance/${userId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            }
        )
        if (!resp.ok && resp.status !== 200) {
            throw new Error('Deposit failed. Please try again later!')
        }
        return resp.json()
    } catch (e) {
        console.error(e)
        throw e
    }
}

export const updateUserInfo = async (data, userId, token) => {
    try {
        const resp = await fetch(`${endpoint}/api/v1/user/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
        if (!resp.ok && resp.status !== 200) {
            throw new Error('Deposit failed. Please try again later!')
        }
        return resp.json()
    } catch (e) {
        console.error(e)
        throw e
    }
}

export const fetchBetslips = async (userId, token, closedValue) => {
    const resp = await fetch(
        `${endpoint}/api/v1/betslip/user/${userId}/${closedValue}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }
    )
    const data = (await resp.json()).data

    return data
}
