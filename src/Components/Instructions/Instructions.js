import React from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';


function Instructions() {
  return (
    <section>
      <section>
        <header>
          <h1>How to Use New Leaves</h1>
        </header>
        <h2>To access the features of New Leaves, you must be logged in.  
          
        </h2>
      </section>

      <section>
        <SignUp />
      </section>
      <section>

        <Login />
      </section>

    </section >
  )
}

export default Instructions;