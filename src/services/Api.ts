import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
