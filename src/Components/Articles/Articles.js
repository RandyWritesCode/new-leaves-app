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

class Article extends React.Component {


  componentDidMount() {
    console.log('get auth', TokenService.getAuthToken())
    fetch(`${config.API_ENDPOINT}/articles`,
      {
        method: 'GET',
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        }
      }
    )
      .then(res => {
        if (!res.ok) {
          return res.json.then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(articles => {
        console.log('new component', articles)
        this.handleRetrieveArticles(articles)

      })
      .catch(error => this.setState({ error }))
  }

  render() {

    return (
      <Error>
        <div>
          <header role="banner">
            <h1>Leaf Pile</h1>
          </header>
          {this.props.articles.map((article, idx) => {

            return (<NewLeavesContext.Consumer key={idx}>
              {(context) => (
                < section >
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
          })}
        </div>
      </Error >
    );
  };
}

Article.propTypes = {
  articles: PropTypes.array
};

export default Article