import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

axiosInstance.interceptors.request.use(
  function (config) {
    return {
      ...config,
      headers: {
        ...config.headers,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
    }
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response.data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const { message } = error
    return Promise.reject(message)
  }
)

export default axiosInstance
