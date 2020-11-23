import React from 'react';
import PropTypes from 'prop-types';
import Error from '../AppError/AppError';


export default function Display(props) {
  let feed
  if (props.display !== '') {
    feed = props.display.map((article, idx) => {

      return (<section key={idx}>
        <header>
          <h2>{article.title}</h2>
          <p>{article.type}</p>
        </header>
        <blockquote>{article.summary}</blockquote>

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