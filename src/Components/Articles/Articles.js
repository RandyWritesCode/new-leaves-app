import React from 'react';
import config from '../../config'
import NewLeavesContext from '../../NewLeavesContext'
import PropTypes from 'prop-types';
import Error from '../AppError/AppError';
import TokenService from '../../services/token-services';
import { Link } from 'react-router-dom'
import './Articles.css'


class Article extends React.Component {

  handleDeleteArticle = (articleId, deleteNoteByContext) => {

    fetch(`${config.API_ENDPOINT}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
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

  render() {

    return (
      <Error>
        <div className="pageContainer" >
          <section>
            <header role="banner">
              <h2>Leaf Pile</h2>
              <h3>View shared traditions here.</h3>
            </header>

          </section>

          {this.props.articles.map((article, idx) => {

            return (<NewLeavesContext.Consumer key={idx}>
              {(context) => {
                // console.log(article, TokenService.getUserId())
                return (
                  < section >
                    <header>
                      <Link to={`/articles/${article.id}`} >
                        <h4 >{article.title}</h4>
                      </Link>
                      <h5>{article.article_type}</h5>
                    </header>
                    <blockquote>{article.summary}</blockquote>

                    { (article.author == TokenService.getUserId()) ?

                      (<>

                        <button
                          onClick={() =>
                            this.handleDeleteArticle(article.id, context.deleteArticle)
                          }
                        >
                          Delete
                  </button> </>) : ''}
                  </section>
                )
              }}
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