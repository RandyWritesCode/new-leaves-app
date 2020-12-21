import React from 'react';
import config from '../../config';
import NewLeavesContext from '../../NewLeavesContext';
import TokenService from '../../services/token-services';

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

export default function DeleteButton(props) {
  return (
    <NewLeavesContext.Consumer>
      {(context) => {
        <>
          <p>hello</p>
          <button
            onClick={() => handleDeleteArticle(props.id, context.deleteArticle)}
          >
            Delete
      </button>
        </>
      }}
    </NewLeavesContext.Consumer>

  )
}