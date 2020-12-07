import React from 'react';
import NewLeavesContext from '../../NewLeavesContext'
// import DeleteButton from '../Buttons/DeleteButton'
import config from '../../config'
import TokenService from '../../services/token-services';

function handleDeleteArticle(articleId, deleteNoteByContext) {
  fetch(`${config.API_ENDPOINT}/api/articles/${articleId}`, {
    method: 'DELETE',
    'authorization': `basic ${TokenService.getAuthToken()}`,

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

export default function ArticleDetails(props) {


  console.log(props)
  const article = props.articles.find(a =>
    a.id === Number(props.match.params.articleId))
  console.log(article)
  return (
    <NewLeavesContext.Consumer>
      {(context) => (
        <div>
          <h2>
            {article.title}
          </h2>
          <p>{article.article_type}</p>
          <p>{article.summary}</p>
          <button
            onClick={() => handleDeleteArticle(article.id, context.deleteArticle)}
          >
            Delete
      </button>
          <button>Comment</button>
          {/* <DeleteButton
        id={article.id} /> */}
        </div>
      )}
    </NewLeavesContext.Consumer >
  )
}