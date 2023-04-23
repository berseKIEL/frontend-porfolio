const SERVER_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080'

export const APIS = {
    porfolio: `${SERVER_URL}/porfolio`
}