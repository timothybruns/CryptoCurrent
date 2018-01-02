import React from 'react';
import { Link } from 'react-router-dom';

// Home component is stateless function that maps thru all blog posts and displays title as the link to read one blog post

export const Home = ({ blogs }) => {
  return blogs !== null ? (
    <section className="bloglist">
      <u><p className="blogList"> Blog Index</p></u>

      {/* map through blogs and render all titles */}

      {blogs.map((blog, index) => (
        <p id="blogE" key={index}><Link ownid={blog.id} to={`/blogs/${blog.id}`}>{blog.title}</Link></p>
      ))}
    </section>

  ) : (

    <p>Loading...</p>

  );
};
