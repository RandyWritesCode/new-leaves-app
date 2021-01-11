import config from '../config'
import TokenService from './token-services'

const AuthApiService = {
  postLogin(credentials) {
    console.log(credentials)
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(credentials),
    })
      .then(res => {
        console.log(res)
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        } else {
          return res.json()
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  postUser(user) {
    console.log(user)
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`

      },
      body: JSON.stringify(user),
    })
      .then(res =>
        console.log(res)
          (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default AuthApiService
