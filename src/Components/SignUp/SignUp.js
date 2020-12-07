import React from 'react';
import Error from '../AppError/AppError';


export default function SignUp() {
  return (
    <Error>

      <section>
        <header>
          <h3>Sign Up</h3>
        </header>
        <form class='signup-form'>
          <div>
            <label for="first-name">First name</label>
            <input placeholder='First Name' type="text" name='first-name' id='first-name' required />
          </div>
          <div>
            <label for="last-name">Last name</label>
            <input type="text" name='last-name' id='last-name' placeholder='Last Name' required />
          </div>
          <div>
            <label for="username">Email</label>
            <input type="text" name='username' id='username' required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name='password' id='password' required />
          </div>
          <div>
            <label for="confirm-password">Confirm Password</label>
            <input type="password" name='confirm-password' id='confirm-password' required />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </section>
    </Error>
  );
};

