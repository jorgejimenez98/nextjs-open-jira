import axios from 'axios'

const entriesApi = axios.create({
    baseURL: '/api',
    headers: {
        "Accept-Encoding": "gzip,deflate,compress" 
    }
})

export default entriesApi