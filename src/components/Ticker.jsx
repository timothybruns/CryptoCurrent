import React from 'react';


const Ticker = ({ tickerList }) => {
	return tickerList !== null ? (
      <ul className="tickerInner">
        {tickerList.map((ticker,index) => (
        <b><li key={index}>{ticker.name} {ticker.symbol} <span className="price"> {ticker.price_usd} </span> </li></b>
      ))}
      </ul>
      ) : (
      <p> Loading ... </p>
    );
};

export default Ticker;
