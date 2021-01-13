import config from '../config'
// import TokenService from './token-services'

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        // 'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(credentials),
    })
      .then(res => {
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
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        // 'authorization': `bearer ${TokenService.getAuthToken()}`

      },
      body: JSON.stringify(user),
    })
      .then(res =>
        console.log(res)
          (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .catch(err => {
        console.log(err)
      })
  },
}

export default AuthApiService
