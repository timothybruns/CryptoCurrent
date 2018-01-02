import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Ticker from './components/Ticker';
import Blog from './components/Blog';
import { Home, About, Resources } from './pages';
import BlogForm from './pages/BlogForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tickerList: null,
      blogData: null,
      apiDataLoaded: false,
      shouldShowAddForm: false,
      id: null,
    };
    this.blogSubmit = this.blogSubmit.bind(this);
    this.deleteBlog = this.deleteBlog.bind(this);
    this.editBlog = this.editBlog.bind(this);
  }


  componentDidMount() {
    this.getCoinData(this.state.tickerList);
    this.getBlogData(this.state.blogData);
  }

  getBlogData() {
    fetch('/api/blogs')
      .then(res => res.json())
      .then((res) => {
        this.setState({
          blogData: res.data.blogs,
          shouldShowAddForm: false,
        });
      })
      .catch(err => console.log(err));
  }

  getCoinData() {
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=5')
      .then(res => res.json())
      .then((res) => {
        this.setState({
          tickerList: res,
          apiDataLoaded: true,
          shouldShowAddForm: false,
        });
      })
      .catch(err => console.log(err));
  }

  blogSubmit(event, data) {
    event.preventDefault();
    fetch('/api/blogs', {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(res => {
        this.getBlogData();
      });
  }

  deleteBlog(id) {
    const rootUrl = window.location.origin;
    const pathUrl = `/api/blogs/${id}`;
    const newUrl = rootUrl.concat(pathUrl);
    // const newUrl = window.location.pathname.slice(0,1);
    fetch(newUrl, {
      method: 'DELETE',
    }).then(res => res.json())
      .then(res => {
        this.getBlogData();
      });
  }

  editBlog(e, data, id) {
    e.preventDefault();
    const rootUrl = window.location.origin;
    const pathUrl = `/api/blogs/${id}`;
    const newUrl = rootUrl.concat(pathUrl);
    fetch(newUrl, {
      method: 'PUT',
    }).then(res => res.json())
      .then(res => {
        this.getBlogData();
      });
  }

  render() {
    return (
        <div className="App">
          <Header />
          <Nav />
          <div className="ticker">
          <Ticker
            tickerList={this.state.tickerList}
          />
          </div>
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Home {...props}
                  blogs={this.state.blogData}

                />}
              />
              <Route
                path="/blogs/:id"
                render={props => <Blog {...props}
                  blogs={this.state.blogData}
                  deleteBlog={this.deleteBlog}
                  editBlog={this.editBlog}
                />}
              />
              <Route path="/about" component={About} />
              <Route path="/resources" component={Resources} />
              <Route
                path="/create"
                render={props => <BlogForm {...props}
                  blogSubmit={this.blogSubmit}
                />}
              />
            </Switch>
          </main>
          <Footer />
        </div>
    );
  }
}

export default App;
