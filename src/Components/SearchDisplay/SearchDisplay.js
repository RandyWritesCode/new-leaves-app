import React from 'react';
import PropTypes from 'prop-types';
import Error from '../AppError/AppError';
import { Link } from 'react-router-dom';


export default function Display(props) {
  let article
  if (props.display !== '') {
    article = props.display.map((article, idx) => {

      return (<section key={idx}>
        <header>
          <h2><Link to={`/articles/${article.id}`}>{article.title} </Link></h2>
          <p>{article.article_type}</p>
        </header>
        <blockquote>{article.summary}</blockquote>


      </section>
      );
    })
  }

  return (
    <Error>

      <div>
        {article}
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