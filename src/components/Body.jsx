import React from 'react';
import Ticker from './Ticker';
import Nav from './Nav';
import BlogList from './BlogList';

const Body = props => {
	return (
      <div className="body">
      {props.tickerList.map((ticker,index) => {
      	console.log(ticker)
      	return (
      		<Ticker
      		name={ticker.name}
      		symbol={ticker.symbol}
      		price_usd={ticker.price_usd}
      		key={index}
          />
      		);
      })}
       <h1> This is the body. </h1>
       <BlogList />
       <Ticker />
       <Nav />
       </div>
		);
};

export default Body;
