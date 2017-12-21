import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

class App extends Component {
  constructor() {
    super()
    this.state = {
      tickerList: null,
      apiDataLoaded: false
    }
  }

 componentDidMount () {
   fetch('https://api.coinmarketcap.com/v1/ticker/?limit=5')
     .then(res => res.json())
     .then(res => {
       this.setState({
        tickerList: res.data,
        apiDataLoaded: true
       })
     }).catch(err => console.log(err))
 }



  render() {
    return (
      <div className="App">

        <h1> This is the header. </h1>
        <Header />
        <Body />
        <Footer />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
         
        </p>

      </div>
    );
  }
}

export default App;
