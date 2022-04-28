import axios from 'axios'

const axiosConfig = {
  baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:4000/graphql',
  headers: {
    'content-type': 'multipart/form-data',
    'platform-auth-user-agent': 'web-platform',
  },
  withCredentials: true,
}

const axiosInstance = axios.create(axiosConfig)

export default axiosInstance
