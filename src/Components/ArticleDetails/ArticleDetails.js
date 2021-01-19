import React from 'react';
import NewLeavesContext from '../../NewLeavesContext'
import config from '../../config'
import TokenService from '../../services/token-services';

function handleDeleteArticle(articleId, deleteArticleByContext) {
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
      deleteArticleByContext(articleId)
    })
    .catch(error => {
      console.error(error)
    })
}

function handleCommentArticle(articleId, commentArticleByContext) {
  fetch(`${config.API_ENDPOINT}/articles/${articleId}`, {
    method: 'POST',
    header: {
      'authorization': `bearer ${TokenService.getAuthToken()}`
    }
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
      commentArticleByContext(articleId)
    })
    .catch(error => {
      console.error(error)
    })
}


export default function ArticleDetails(props) {

  const article = props.articles.find(a =>
    a.id === Number(props.match.params.articleId))
  return (
    <NewLeavesContext.Consumer>
      {(context) => (
        <div>
          <h2>
            {article.title}
          </h2>
          <p>{article.article_type}</p>
          <p>{article.summary}</p>
          { (article.author == TokenService.getUserId()) ?

            (<>

              <button
                onClick={() =>
                  handleDeleteArticle(article.id, context.deleteArticle)
                }
              >
                Delete
</button> </>) : ''}

          {/* <button
            onClick={() =>
              handleCommentArticle(article.id, context.commentArticle)
            }
          >
            Comment
          </button> */}

        </div>
      )}
    </NewLeavesContext.Consumer >
  )
}