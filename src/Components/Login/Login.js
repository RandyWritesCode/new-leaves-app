import React from 'react';
import Error from '../AppError/AppError';
// import AuthApiService from '../../services/auth-api-service';
// import TokenService from '../../services/token-services';

export default function Login(props) {
  console.log(props)
  return (
    <Error>

      <section>
        <header>
          <h3>Log in </h3>

        </header>
        <p>Demo Account:</p>
        <p>
          Username: Account1
          </p>
        <p>
          Password: 123abc$
          </p>
        <form class='signup-form' onSubmit={props.handleSubmitJwtAuth}>
          <div>
            <label for="username">Username</label>
            <input
              placeholder='Username'
              type="text"
              name='username'
              id='username' />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              type="password"
              name='password'
              id='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </Error>
  )

};

