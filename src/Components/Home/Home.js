import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Error from '../AppError/AppError';


export default function Home() {
  return (
    <Error>

      <div className='pageContainer'>
        <section>
          <header>
            <h2>New Leaves</h2>
          </header>
          <h3>learn new traditions
            </h3>
        </section>

        <section>
          <header>
            <h3>Traditions worth sharing!</h3>
          </header>
          <p>Have a tradition worth sharing?  Post it using New Leaf so that others can start practicing it.</p>
        </section>

        <section>
          <header>
            <h3>Find worth while traditions</h3>
          </header>
          <p>Looking for new ways to celebrate?  Interested in a tradition or holiday, but not sure how to practice it?  Wanting to understand how others do things?  Scroll through categorized lists of traditions using search.</p>
        </section>

        <section>
          <header>
            <h3>How to Use New Leaves</h3>
          </header>
          <p>To access the features of New Leaves, you must be logged in.
          If you haven't already,  create a <Link to="/signup">new account</Link> or <Link to="/login">log in</Link> using the demo account.

          </p>
        </section>
      </div >
    </Error>
  );
};

