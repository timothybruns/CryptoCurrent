import React from 'react';
import Ticker from './Ticker';
import Nav from './Nav';
import BlogList from './BlogList';

const Body = props => {
  return (
      <div className="body">
        <h1> Blog Posts </h1>
      <div>
      {props.tickerList.map((ticker,index) => {
        return (
          <Ticker
          name={ticker.name}
          symbol={ticker.symbol}
          price_usd={ticker.price_usd}
          key={index}
          />
          );
      })}
       {props.blogData.map((blog,index) => {
            return (
                  <BlogList
                  title={blog.title}
                  content={blog.content}
                  username={blog.username}
                  tagname={blog.tagname}
                  key={index}
                  />
            );
      })}
       </div>
       <Nav />
       </div>
    );
};

export default Body;
