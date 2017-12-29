import React from 'react';


const Ticker = ({ tickerList }) => {
	return tickerList !== null ? (
      <div className="ticker">
        {tickerList.map((ticker,index) => (
          <p key={index}>{ticker.name} {ticker.symbol} {ticker.price_usd} </p>
      ))}
      </div>
      ) : (
      <p> Loading ... </p>
    );
};

export default Ticker;
