import axios from 'axios'

export default {
  generateApi () {
    const api = axios.create({
      baseURL: process.env.REACT_APP_BASE,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    api.interceptors.response.use(
      function (response) {
        return response
      },
      function (error) {
        return Promise.reject(error)
      }
    )
    return api
  }
}
