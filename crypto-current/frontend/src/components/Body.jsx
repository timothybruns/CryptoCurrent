import React from 'react';
import Ticker from './Ticker';
import Nav from './Nav';
import BlogList from './BlogList';

const Body = props => {
	return (
      <div className="body">
       <h1> This is the body. </h1>
       <BlogList />
       <Ticker />
       <Nav />
       </div>
		);
};

export default Body;
