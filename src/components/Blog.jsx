import React from 'react';

const Blog  = props => {
  return (
      <div className="blog">
      <p className="blogs">
       {props.title} {props.content} {props.username} {props.tagname}
        </p>
       </div>
    );
};

export default Blog;
