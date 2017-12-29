import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { Home, About, Resources } from './pages';
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
      <Router>
        <div className="App">
          <Header />
          <div className="body">
            <Route
              exact path="/"
              render={props => <Home {...props} blogs={this.state.blogData} />}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/resources" component={Resources} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
