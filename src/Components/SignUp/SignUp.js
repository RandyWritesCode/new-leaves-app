import React from 'react';
import Error from '../AppError/AppError';

function SignUp(props) {

  return (
    <Error>

      <section>
        <header>
          <h3>Sign Up</h3>
        </header>
        <form className='signup-form' onSubmit={props.handleSignUpSubmit} >
          <div>
            <label htmlFor="fullname">Full name:</label>
            <input type="text" name='fullname' id='fullname' placeholder='Randy Douglas' value='Randy Douglas' required />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name='username' id='username' placeholder='NewLeavesUser1' required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' value='1Aa!2Bb@' required />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" name='confirm-password' id='confirm-password' value='1Aa!2Bb@' required />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </section>
    </Error>
  );
};

export default SignUp;