import React from 'react';


const Ticker = ({ tickerList }) => {
	return tickerList !== null ? (
      <ul className="tickerInner">
        {tickerList.map((ticker,index) => (
        <b><li key={index}>{ticker.name} {ticker.symbol} {ticker.price_usd} </li></b>
      ))}
      </ul>
      ) : (
      <p> Loading ... </p>
    );
};

export default Ticker;
