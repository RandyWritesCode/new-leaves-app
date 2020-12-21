import React from 'react';
import config from '../../config'
import NewLeavesContext from '../../NewLeavesContext'
//import DeleteButton from '../Buttons/DeleteButton';
import PropTypes from 'prop-types';
import Error from '../AppError/AppError';
import TokenService from '../../services/token-services';
import { Link } from 'react-router-dom'



function handleDeleteArticle(articleId, deleteNoteByContext) {
  fetch(`${config.API_ENDPOINT}/articles/${articleId}`, {
    method: 'DELETE',
    'authorization': `bearer ${TokenService.getAuthToken()}`,

  })
    .then(res => {
      console.log(res)
      if (!res.ok) {
        return res.json().then(error => {
          throw error
        })
      }
      return res
    })
    .then(() => {
      deleteNoteByContext(articleId)
    })
    .catch(error => {
      console.error(error)
    })
}

export default function Article(props) {
  console.log(props)
  let article = props.articles.map((article, idx) => {

    return (<NewLeavesContext.Consumer>
      {(context) => (
        < section key={idx}>
          <header>
            <Link to={`/articles/${article.id}`} >
              <h2 >{article.title}</h2>
            </Link>
            <p>{article.article_type}</p>
          </header>
          <blockquote>{article.summary}</blockquote>

          <button>Edit</button>
          <button
            onClick={() => handleDeleteArticle(article.id, context.deleteArticle)}
          >
            Delete
      </button>

        </section>
      )}
    </NewLeavesContext.Consumer >
    )
  })

  return (
    <Error>
      <div>
        <header role="banner">
          <h1>Leaf Pile</h1>
        </header>
        {article}
      </div>
    </Error>
  );
};

Article.propTypes = {
  articles: PropTypes.array
};