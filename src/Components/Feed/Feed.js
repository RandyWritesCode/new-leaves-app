import React from 'react';
import PropTypes from 'prop-types';
import Error from '../AppError/AppError';


export default function Feed(props) {
  console.log(props.articles)

  let feed = props.articles.map((article, idx) => {

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
  });

  return (
    <Error>
      <div>
        <header role="banner">
          <h1>Leaf Pile</h1>
        </header>
        {feed}
      </div>
    </Error>
  );
};

Feed.propTypes = {
  articles: PropTypes.array
};

