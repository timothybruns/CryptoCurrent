import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Ticker from './components/Ticker';
import { Home, BlogForm, About, Resources } from './pages';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tickerList: null,
      blogData: null,
      apiDataLoaded: false,
    };

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
        });
      })
      .catch(err => console.log(err));
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
              exact path="/"
                render={props => <Home {...props}
                  blogs={this.state.blogData} /> }
              />
              <Route path="/about" component={About} />
              <Route path="/resources" component={Resources} />
              <Route path="/create" component={BlogForm} />
            </Switch>
          </main>
          <button className="createButton"><Link to="/create">Create Blog</Link></button>
          <Footer />
        </div>
    );
  }
}

export default App;
