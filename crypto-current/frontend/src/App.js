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
      backendcall: null,
    }
  }

 componentDidMount () {
   fetch('https://api.coinmarketcap.com/v1/ticker/?limit=5')
     .then(res => res.json())
     .then(res => {
      console.log(res)
       this.setState({
        tickerList: res,
        apiDataLoaded: true
       })
     }).catch(err => console.log(err))
 }

  render() {
    return (
      <div className="App">
      <Header />
      
        {this.state.apiDataLoaded ? (
         <div>
           <Body tickerList={this.state.tickerList}/>
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
