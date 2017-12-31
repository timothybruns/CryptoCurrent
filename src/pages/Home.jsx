import React from 'react';
import { Link } from 'react-router-dom';

export const Home = ({ blogs }) => {
  return blogs !== null ? (
    <section className="bloglist">
      <u><p className="blogList"> Blog Index</p></u>

      {/* map through blogs and render all titles */}

      {blogs.map((blog, index) => (
        <p key={index}><Link ownid={blog.id} to={`/blogs/${blog.id}`}>{blog.title}</Link></p>
      ))}
    </section>

  ) : (

    <p>Loading...</p>

  );
};
