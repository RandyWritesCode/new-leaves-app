import React from 'react';
import PropTypes from 'prop-types';
import Error from '../AppError/AppError';


export default function Display(props) {
  let feed
  if (props.display !== '') {
    feed = props.display.map((post, idx) => {

      return (<section key={idx}>
        <header>
          <h2>{post.title}</h2>
          <p>{post.type}</p>
        </header>
        <blockquote>{post.summary}</blockquote>

        <button>Edit</button>
        <button>Delete</button>
      </section>
      );
    })
  }


  return (
    <Error>

      <div>
        {feed}
      </div>
    </Error>
  );
};

Display.propTypes = {
  display: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
};