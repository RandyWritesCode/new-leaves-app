import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'
import Error from '../AppError/AppError';


export default function Home() {
  return (
    <Error>

      <div className='pageContainer'>
        <section>
          <header>
            <h2>Why use New Leaves?</h2>
            <h3>
              As time passes and seasons in our lives change,
              we sometimes let go of old traditions and gain new ones.
              New Leaves provides a place for users to learn new traditions
              and cherish the ones we hold dear.
          </h3>
          </header>
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
    </Error >
  );
};

