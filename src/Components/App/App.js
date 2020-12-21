import React from 'react';
import Nav from '../Nav/Nav';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Search from '../Search/Search';
import Articles from '../Articles/Articles';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Home from '../Home/Home';
import AddArticle from '../AddArticle/AddArticle';
import Error from '../AppError/AppError';
import config from '../../config';
import NewLeavesContext from '../../NewLeavesContext';
import TokenService from '../../services/token-services';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import AuthApiService from '../../services/auth-api-service';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      searchCategory: 'title',
      display: '',

      store: {
        articles: []
      },
      article: {},
      articleType: '',
      articleTitle: '',
      articleSummary: '',

      error: null,

    }
  };

  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }


  handleSubmitJwtAuth = ev => {
    // console.log("i'm in the JWT auth funciton!!!")
    ev.preventDefault()
    this.setState({ error: null })
    const { username, password } = ev.target
    console.log("the buck stops here!!!!!!", "username: ", username.value, " and password: ", password.value)
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        // console.logI('in the response from JWT Auth: ', res);
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.handleLoginSuccess()
      })
      .catch(res => {
        // console.log('catch');
        // console.log(res);
        this.setState({ error: res.error })
      })
    this.props.history.push('/articles')
  }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(username.value, password.value)
    )

    this.props.history.push('/articles')
  }


  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  };

  handleSearchTypeChange = event => {
    this.setState({
      searchCategory: event.target.value
    })
  };

  handleSearchSubmit = (event) => {
    event.preventDefault()
    let display = this.state.store.articles.filter(article => {
      let searchTerm = this.state.searchTerm.toLowerCase()
      let articleValue = article[this.state.searchCategory].toLowerCase()
      return articleValue.includes(searchTerm)
    })
    this.setState({
      display: display
    })
  };

  handleArticleTitleChange = event => {
    let articleTitle = event.target.value
    this.setState({
      articleTitle: articleTitle
    })
    console.log(this.state.articleTitle)
  };

  handleArticleSummaryChange = event => {
    let articleSummary = event.target.value
    this.setState({
      articleSummary: articleSummary
    })
    console.log(this.state.articleSummary)
  };

  handleArticleTypeChange = event => {
    let articleType = event.target.value
    this.setState({
      articleType: articleType
    })
    console.log(this.state.articleType)
  };

  handleArticleSubmit = (event, addArticleByContext) => {
    event.preventDefault()
    const { articleTitle, articleSummary, articleType } = this.state

    fetch(`${config.API_ENDPOINT}/articles`, {
      'method': 'POST',
      'headers': {
        'content-type': 'application/json',
        'mode': 'cors',
        'Access-Control-Allow-Origin': '*',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ title: articleTitle, summary: articleSummary, article_type: articleType }),
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        console.log(data)
        addArticleByContext(data)
      })
      .catch(error => {
        console.error(error)
      })
  };


  componentDidMount() {
    // fetch(`${config.API_ENDPOINT}/articles`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       'authorization': `bearer ${TokenService.getAuthToken()}`,
    //     }
    //   }
    // )
    //   .then(res => {
    //     console.log(res)
    //     if (!res.ok) {
    //       return res.json.then(error => Promise.reject(error))
    //     }
    //     return res.json()
    //   })
    //   .then(articles => {
    //     console.log("articles from fetch", articles);
    //     this.setState({
    //       store: {
    //         articles: articles
    //       }
    //     })
    //   })
    //   .catch(error => this.setState({ error }))
  }

  deleteArticle = (articleId) => {
    const newArticles = this.state.store.articles.filter(article =>
      article.id !== articleId
    )
    console.log(newArticles)
    this.setState({
      store: {
        articles: newArticles
      }
    })
  }

  addArticle = (articleToAdd) => {
    let newArticle = {
      id: articleToAdd.id,
      title: articleToAdd.title,
      summary: articleToAdd.summary,
      article_type: articleToAdd.article_type,
      date_published: articleToAdd.date_published
    }

    const updatedArticle = [...this.state.store.articles, newArticle]
    this.setState({
      store: {
        articles: updatedArticle
      }
    })
  }

  render() {
    const contextValue = {
      deleteArticle: this.deleteArticle,
      addArticle: this.addArticle,

    }

    return (
      <NewLeavesContext.Provider value={contextValue}>

        <body className="App">
          <Nav />
          <main>
            <Error>
              <Switch>
                <Route
                  exact
                  path={'/'}
                  component={Home}
                />
                <Route
                  path={'/login'}
                  render={(routeProps) => (
                    <Login
                      handleSubmitJwtAuth={this.handleSubmitJwtAuth}
                      {...routeProps}
                    />
                  )}
                />
                <PublicOnlyRoute
                  path={'/signup'}
                  component={SignUp}
                />
                <PrivateRoute
                  exact
                  path={'/articles'}
                  render={() => (
                    <Articles
                      articles={this.state.store.articles}
                    />
                  )}
                />
                <PrivateRoute
                  path={'/articles/:articleId'}
                  render={(routeProps) => (
                    <ArticleDetails
                      articles={this.state.store.articles}
                      {...routeProps}
                    />
                  )}
                />
                <Route
                  path={'/addarticle'}
                  render={() => (
                    <AddArticle
                      handleArticleTypeChange={this.handleArticleTypeChange}
                      handleArticleSubmit={this.handleArticleSubmit}
                      state={this.state}
                      handleArticleTitleChange={this.handleArticleTitleChange}
                      handleArticleSummaryChange={this.handleArticleSummaryChange}
                    />
                  )}
                />
                <Route
                  path={'/search'}
                  render={() => (
                    <Search
                      articles={this.state.store.articles}
                      handleSearchTermChange={this.handleSearchTermChange}
                      handleSearchTypeChange={this.handleSearchTypeChange}
                      handleSearchSubmit={this.handleSearchSubmit}
                      display={this.state.display}
                    />
                  )}
                />

              </Switch>
            </ Error >
          </main>
        </body>

      </NewLeavesContext.Provider >
    );
  }
}


export default withRouter(App)