import axios from 'axios'

const randomUserHttp = axios.create({
    baseURL: process.env.REACT_APP_RANDOMUSER_BASE || "http://localhost:5001",
    headers: {
        "Content-Type": "application/json"
    }
})

const Request = {
    randomUserHttp
}

export default Request