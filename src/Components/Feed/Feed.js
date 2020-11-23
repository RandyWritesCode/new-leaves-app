import React from 'react';
import PropTypes from 'prop-types';
import Error from '../AppError/AppError';


export default function Feed(props) {
  console.log(props.posts)

  let feed = props.posts.map((post, idx) => {

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
  posts: PropTypes.array
};

