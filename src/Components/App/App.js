import React from 'react';
import Nav from '../Nav/Nav';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Search from '../Search/Search';
import Feed from '../Feed/Feed';
import Home from '../Home/Home';
import Post from '../Post/Post';
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
        posts: []
      },

      postType: '',
      postTitle: '',
      postSummary: '',

    }
    console.log(this.state.store.posts)
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
    let display = this.state.store.posts.filter(post => {
      let searchTerm = this.state.searchTerm.toLowerCase()
      let postValue = post[this.state.searchCategory].toLowerCase()
      return postValue.includes(searchTerm)
    })
    this.setState({
      display: display
    })
  };

  handlePostTitleChange = event => {
    let postTitle = event.target.value
    this.setState({
      postTitle: postTitle
    })
    console.log(this.state.postTitle)
  };

  handlePostSummaryChange = event => {
    let postSummary = event.target.value
    this.setState({
      postSummary: postSummary
    })
    console.log(this.state.postSummary)
  };

  handlePostTypeChange = event => {
    let postType = event.target.value
    this.setState({
      postType: postType
    })
    console.log(this.state.postType)
  };

  handlePostSubmit = (event) => {
    event.preventDefault()
    const { store: { posts }, postTitle, postSummary, postType, id } = this.state

    let newPost = {
      id: id,
      title: postTitle,
      summary: postSummary,
      type: postType
    }

    let updatedPost = [...posts, newPost]
    console.log(updatedPost)

    this.setState({
      store: {
        posts: updatedPost
      }
    })

    console.log(this.state.store.posts)
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/posts`)
      .then(res => {
        if (!res.ok) {
          return res.json.then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(posts => {
        console.log(posts);
        this.setState({
          store: {
            posts: posts
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
                    posts={this.state.store.posts}
                  />
                )}
              />
              <Route
                path={'/Post'}
                render={() => (
                  <Post
                    handlePostTypeChange={this.handlePostTypeChange}
                    handlePostSubmit={this.handlePostSubmit}
                    state={this.state}
                    handlePostTitleChange={this.handlePostTitleChange}
                    handlePostSummaryChange={this.handlePostSummaryChange}
                  />
                )}
              />
              <Route
                path={'/Search'}
                render={() => (
                  <Search
                    posts={this.state.store.posts}
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


