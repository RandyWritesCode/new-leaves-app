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
          <Link to={`/articles/${article.id}`}>
            <h4>{article.title}</h4>
          </Link>
          <h5>{article.article_type}</h5>
        </header>
        <blockquote>{article.summary}</blockquote>

      </section>
      );
    })
  }

  return (
    <Error>

      <article>
        {article}
      </article>
    </Error>
  );
};

Display.propTypes = {
  display: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
};