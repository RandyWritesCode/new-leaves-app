import React from 'react';
import Nav from '../Nav/Nav';
import { Route, Switch } from 'react-router-dom'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import Search from '../Search/Search';
import Feed from '../Feed/Feed';
import Home from '../Home/Home';
import Post from '../Post/Post';
import STORE from '../../dummyStore'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      searchCategory: 'title',
      display: '',

      store: STORE,

      postType: '',
      postTitle: '',
      postSummary: '',

      posts: STORE.posts
    }
  }

  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSearchTypeChange = event => {
    this.setState({
      searchCategory: event.target.value
    })
  }

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
  }



  handlePostTitleChange = event => {
    let postTitle = event.target.value
    this.setState({
      postTitle: postTitle
    })
  }

  handlePostSummaryChange = event => {
    let postSummary = event.target.value
    this.setState({
      postSummary: postSummary
    })
  }

  handlePostTypeChange = event => {
    let postType = event.target.value
    this.setState({
      postType: postType
    })
  }

  handlePostSubmit = (event) => {
    event.preventDefault()
    let post = {
      title: this.state.postTitle,
      summary: this.state.postSummary,
      type: this.state.postType
    }
    const newPost = [...this.state.posts, post]
    this.setState({
      posts: newPost
    })
  }

  render() {

    return (
      <body className="App">
        <Nav />
        <main>
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
                  posts={this.state.posts}
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
                  posts={this.state.posts}
                  handleSearchTermChange={this.handleSearchTermChange}
                  handleSearchTypeChange={this.handleSearchTypeChange}
                  handleSearchSubmit={this.handleSearchSubmit}
                  display={this.state.display}
                />
              )}
            />

          </Switch>

        </main>
      </body>
    );
  }
}


