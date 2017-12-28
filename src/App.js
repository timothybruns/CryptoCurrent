import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

class App extends Component {
  constructor() {
    super()
    this.state = {
      tickerList: null,
      apiDataLoaded: false,
    }
  }

  getBlogData() {
    fetch('/api/blogs')
    .then(res => res.json())
    .then(res => {
      console.log(res.data.blogs);
      this.setState({
        blogData: res.data.blogs,
      });
    }).catch(err => console.log(err));
  }

   getCoinData() {
   fetch('https://api.coinmarketcap.com/v1/ticker/?limit=5')
     .then(res => res.json())
     .then(res => {
       this.setState({
        tickerList: res,
        apiDataLoaded: true
       })
     })
     .catch(err => console.log(err))
 }

 componentDidMount() {
   this.getCoinData(this.state.tickerList);
   this.getBlogData(this.state.blogData);
 }

  render() {
    return (
      <div className="App">
      <Header />

        {this.state.apiDataLoaded ? (
         <div>
           <Body tickerList={this.state.tickerList}
                   blogData={this.state.blogData}
           />
           <Footer />
           </div>
          ) : (
            <p className="loading"> Loading...</p>
          )}
         </div>
    );
  }
}

export default App;
