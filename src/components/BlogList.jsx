import React from 'react';
import Blog from './Blog';

const BlogList  = props => {
	return (
      <div className="bloglist">
        <p className="blogdata">
        {props.title} {props.content} {props.username} {props.tagname}
        </p>
       <Blog />
       </div>
		);
};

export default BlogList;
