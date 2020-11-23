import React from 'react';
import Nav from '../Nav/Nav';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Search from '../Search/Search';
import Feed from '../Feed/Feed';
import Home from '../Home/Home';
import Article from '../Article/Article';
import Error from '../AppError/AppError';
import config from '../../config';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      searchCategory: 'title',
      display: '',

      store: {
        articles: []
      },

      articleType: '',
      articleTitle: '',
      articleSummary: '',


    }
    // console.log(this.state.store.articles)
  };


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
    // console.log(this.state.articleTitle)
  };

  handleArticleSummaryChange = event => {
    let articleSummary = event.target.value
    this.setState({
      articleSummary: articleSummary
    })
    // console.log(this.state.articleSummary)
  };

  handleArticleTypeChange = event => {
    let articleType = event.target.value
    this.setState({
      articleType: articleType
    })
    // console.log(this.state.articleType)
  };

  handleArticleSubmit = (event) => {
    event.preventDefault()
    const { store: { articles }, articleTitle, articleSummary, articleType } = this.state

    let newArticle = {
      title: articleTitle,
      summary: articleSummary,
      type: articleType
    }

    let updatedArticle = [...articles, newArticle]
    // console.log(updatedArticle)

    this.setState({
      store: {
        articles: updatedArticle
      }
    })

    fetch(`${config.API_ENDPOINT}/api/articles`, {
      method: 'POST',
      'content-type': 'application/json',
      'mode': 'cors',
      'Access-Control-Allow-Origin': '*'
    })
      .then(res => {

        return res.json()
      })
      .then(data => {
        console.log(data)

      })
    // console.log(this.state.store.articles)
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/articles`)
      .then(res => {
        if (!res.ok) {
          return res.json.then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(articles => {
        console.log(articles);
        this.setState({
          store: {
            articles: articles
          }
        })
      })
      .catch(error => this.setState({ error }))
  }

  render() {

    return (
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
                path={'/Login'}
                component={Login}
              />
              <Route
                path={'/SignUP'}
                component={SignUp}
              />
              <Route
                path={'/Feed'}
                render={() => (
                  <Feed
                    articles={this.state.store.articles}
                  />
                )}
              />
              <Route
                path={'/AddArticle'}
                render={() => (
                  <Article
                    handleArticleTypeChange={this.handleArticleTypeChange}
                    handleArticleSubmit={this.handleArticleSubmit}
                    state={this.state}
                    handleArticleTitleChange={this.handleArticleTitleChange}
                    handleArticleSummaryChange={this.handleArticleSummaryChange}
                  />
                )}
              />
              <Route
                path={'/Search'}
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
    );
  }
}


