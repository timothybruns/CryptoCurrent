import React from 'react';

const Blog  = ({ blogs }) => {
  return blogs !== null ? (
    <section className="blog">
      <p>This is a single blog</p>

      {/* map through blogs and render all titles */}

      {blogs.map((blog, index) => (
        <p key={index}>{blog.title} {blog.content}</p>
      ))}
    </section>

  ) : (

    <p>Loading...</p>

  );
}
export default Blog;
