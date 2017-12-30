
import React from 'react';

export const BlogForm = () => {
  return (
    <section className="about">
      <p>This is the Blog Form page!</p>
      <h1> We fucking love this project</h1>
    </section>
  );
};

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:   '',
      content: '',
      user_id: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      [name]: val,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    {this.props.blogSubmit(e, this.state)}
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" name="title" value={this.state.title} placeholder="title" onChange={this.handleChange} />
          <input type="text" name="content" value={this.state.content} placeholder="content" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

export default BlogForm;




