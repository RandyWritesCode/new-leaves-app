import React from 'react';
import Error from '../AppError/AppError';
// import AuthApiService from '../../services/auth-api-service';
// import TokenService from '../../services/token-services';

export default function Login(props) {
  return (
    <Error>

      <section>
        <header>
          <h3>Log in </h3>

        </header>
        <p>Demo Account:</p>
        <p>
          Username: Randy
          </p>
        <p>
          Password: 1Aa!2Bb@
          </p>
        <form className='signup-form' onSubmit={props.handleSubmitJwtAuth}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              placeholder='Username'
              type="text"
              name='username'
              id='username' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
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

