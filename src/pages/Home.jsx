import React from 'react';
import { Link } from 'react-router-dom';

export const Home = ({ blogs }) => {
  return blogs !== null ? (
    <section className="bloglist">
      <p> In homeroute with Switch</p>

      {/* map through blogs and render all titles */}

      {blogs.map((blog, index) => (
        <p key={index}><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></p>
      ))}
    </section>

  ) : (

    <p>Loading...</p>

  );
};
