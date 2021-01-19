import React from 'react';

const NewLeavesContext = React.createContext({
  deleteArticle: () => { },
  editArticle: () => { },
  addArticle: () => { },
  onLoginSuccess: () => { },
  commentArticle: () => { }
})

export default NewLeavesContext
