import React from 'react';

function Login() {
  return (
    <section>
      <header>
        <h3>Log in </h3>
        <p>(under construction)</p>

      </header>
      <p>Demo Account:</p>
      <p>
        Username: Account1
          </p>
      <p>
        Password: 123abc$
          </p>
      <form class='signup-form'>
        <div>
          <label for="username">Username</label>
          <input placeholder='Username' type="text" name='username' id='username' />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name='password' id='password' />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </section>
  )
}

export default Login