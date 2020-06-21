import dotenv from 'dotenv'
dotenv.config()

export const Config = {
    endpoint: process.env.ENDPOINT || 'http://localhost:1337/api/v1',
    token: process.env.TOKEN
}