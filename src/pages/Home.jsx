import React from 'react';

export const Home = ({ blogs }) => {
  return blogs !== null ? (
    <section className="bloglist">
      <p> In homeroute </p>
      {blogs.map((blog, index) => (
        <p key={index}>{blog.title}</p>
      ))}
    </section>
  ) : (
    <p>Loading...</p>
  )
};
