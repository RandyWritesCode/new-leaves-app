import React from 'react';

const NewLeavesContext = React.createContext({
  articles: [],
  deleteArticle: () => { },
  editArticle: () => { },
  addArticle: () => { },
  onLoginSuccess: () => { }


})

export default NewLeavesContext
