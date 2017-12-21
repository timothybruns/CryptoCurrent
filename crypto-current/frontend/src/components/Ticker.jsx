import React from 'react';


const Ticker  = props => {
	return (
      <div className="ticker">
       	<p className="coindata">{props.name}({props.symbol}) ${props.price_usd}</p>

      </div>
	);
};

export default Ticker;