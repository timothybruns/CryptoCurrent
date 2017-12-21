import React from 'react';
import Blog from './Blog';

const BlogList  = props => {
	return (
      <div className="bloglist">
       <h1> This is the list of blog posts. </h1>
       <Blog />
       </div>
		);
};

export default BlogList;