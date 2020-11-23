import React from 'react';
import './Home.css';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Error from '../AppError/AppError';


export default function Home() {
  return (
    <Error>

      <section>
        <section>
          <header>
            <h1>New Leaves</h1>
          </header>
          <h2>As time passes and seasons in our lives change, we sometimes let go of old traditions and gain new ones. This app provides a place for users to grow new leaves, or learn new traditions through an exchange of ideas and community discourse.</h2>
        </section>

        <section>
          <header>
            <h3>Traditions worth sharing!</h3>
          </header>
          <p>Have a tradition worth sharing?  Post it so that others can start practicing it.</p>
        </section>

        <section>
          <header>
            <h3>Find worth while traditions</h3>
          </header>
          <p>Looking for new ways to celebrate?  Interested in a tradition or holiday, but not sure how to practice it?  Wanting to understand how others do things?  Scroll through categorized lists of traditions using our search tool.</p>
        </section>

        <section>
          <header>
            <h3>Want to communicate with others about traditions?</h3>
          </header>
          <p>Respond to other posts by using the comments feature.</p>
        </section>
        <section>
          <header>
            <h1>How to Use New Leaves</h1>
          </header>
          <h2>To access the features of New Leaves, you must be logged in.
          Use the demo user account below in order to access the site, without creating an account.
        <p>
              Username: Account1
          </p>
            <p>
              Password: 123abc$
          </p>
          </h2>
        </section>
        <Login />

        <SignUp />

      </section >
    </Error>
  );
};

