import React from 'react';
import Error from '../AppError/AppError';
import './Login.css'


export default function Login(props) {
  return (
    <Error>
      <div className='pageContainer'>

        <section>
          <header>
            <h2>Log in </h2>

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
      </div>

    </Error>
  )

};

