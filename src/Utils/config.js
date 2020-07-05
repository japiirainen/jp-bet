import dotenv from 'dotenv'
dotenv.config()

export const Config = {
    endpoint: process.env.ENDPOINT || 'http://localhost:1998',
    token: process.env.TOKEN,
}
