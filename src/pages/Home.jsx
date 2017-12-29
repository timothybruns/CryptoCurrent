import React from 'react';


export const Home = ({ blogs }) => {
  return blogs !== null ? (
    <section className="bloglist">
      <p> In homeroute </p>

      {/* map through blogs and render all titles */}

      {blogs.map((blog, index) => (
        <p key={index}>{blog.title}</p>
      ))}
    </section>

  ) : (

    <p>Loading...</p>

  );
};
