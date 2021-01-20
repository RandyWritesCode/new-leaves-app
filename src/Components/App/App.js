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
import './App.css'

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
      article: {}, //
      articleType: '',
      articleTitle: '',
      articleSummary: '',
      author: '',

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
    ev.preventDefault()
    this.setState({ error: null })
    const { username, password } = ev.target
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        TokenService.saveUserId(res.userId)
        this.handleLoginSuccess()
      })
      .catch(res => {
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
        // console.log("articles from search", articles);
        let display = articles.filter(article => {
          let searchTerm = this.state.searchTerm.toLowerCase()
          let articleValue = article[this.state.searchCategory].toLowerCase()
          return articleValue.includes(searchTerm)
        })
        this.setState({
          display: display
        })
        this.setState({
          store: {
            articles: articles
          }
        })
      })
      .catch(error => this.setState({ error }))
  }

  // handleArticleTitleChange = event => {
  //   // console.log(event.target.value)
  //   let articleTitle = event.target.value
  //   this.setState({
  //     articleTitle: articleTitle
  //   })
  // };

  // handleArticleSummaryChange = event => {
  //   let articleSummary = event.target.value
  //   this.setState({
  //     articleSummary: articleSummary
  //   })
  // };

  // handleArticleTypeChange = event => {
  //   let articleType = event.target.value
  //   this.setState({
  //     articleType: articleType
  //   })
  // };

  handleArticleSubmit = (event, addArticleByContext) => {
    console.log(this.state.article_type) //undefined
    const articleTitle = event.target.leaf_title.value
    const articleSummary = event.target.leaf_summary.value
    const articleType = this.state.articleType
    const author = TokenService.getUserId
    this.setState({
      articleTitle: articleTitle,
      articleSummary: articleSummary,
      author: author
    })
    event.preventDefault()
    // const { articleTitle, articleSummary, articleType } = this.state

    fetch(`${config.API_ENDPOINT}/articles`, {
      'method': 'POST',
      'headers': {
        'content-type': 'application/json',
        'mode': 'cors',
        'Access-Control-Allow-Origin': '*',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ title: articleTitle, summary: articleSummary, article_type: articleType, author: author() }),
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
        addArticleByContext(data)
        this.props.history.push('/articles')
      })
      .catch(error => {
        console.error(error)
      })
  };

  handleRegistrationSuccess = user => {

    const { history } = this.props
    history.push('/login')
  }

  handleSignUpSubmit = event => {
    event.preventDefault()

    const { fullname, username, password } = event.target
    // console.log(fullname.value, username.value)

    this.setState({ error: null })
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      fullname: fullname.value,
    })
      .then(user => {
        fullname.value = ''
        username.value = ''
        password.value = ''
        this.handleRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }
  componentDidMount() {
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
        // console.log("articles from fetch", articles);
        this.setState({
          store: {
            articles: articles
          }
        })
      })
      .catch(error => this.setState({ error }))
  }
  //handler to retireve data 
  deleteArticle = (articleId) => {
    const newArticles = this.state.store.articles.filter(article =>
      article.id !== articleId
    )
    this.setState({
      store: {
        articles: newArticles
      }
    })
  }

  // commentArticle = (articleId) => {
  //   console.log(articleId)
  // }

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

  // handleRetrieveArticles = (articles) => {
  //   console.log('app component', articles)
  //   this.setState({
  //     store: {
  //       articles: articles
  //     }
  //   })
  // }

  onValueChange = (event) => {
    console.log(event)
    this.setState({
      articleType: event.target.value
    })
    console.log(this.state.articleType)
  }

  render() {
    const contextValue = {
      deleteArticle: this.deleteArticle,
      addArticle: this.addArticle,
      commentArticle: this.commentArticle
    }

    // console.log(this.state.articleType)
    return (
      <NewLeavesContext.Provider value={contextValue}>

        <div className="App">
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
                  handleSignUpSubmit={this.handleSignUpSubmit}
                />
                <PrivateRoute
                  exact
                  path={'/articles'}
                  render={() => (
                    <Articles
                      articles={this.state.store.articles}
                    // handleRetrieveArticles={this.handleRetrieveArticles}
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
                <PrivateRoute
                  path={'/addarticle'}
                  render={() => (
                    <AddArticle
                      handleArticleTypeChange={this.handleArticleTypeChange}
                      handleArticleSubmit={this.handleArticleSubmit}
                      state={this.state}
                      handleArticleTitleChange={this.handleArticleTitleChange}
                      handleArticleSummaryChange={this.handleArticleSummaryChange}
                      onValueChange={this.onValueChange}
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
        </div>

      </NewLeavesContext.Provider >
    );
  }
}


export default withRouter(App)