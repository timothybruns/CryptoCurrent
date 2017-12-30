import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.title,
      content: event.target.content,
    });
  }


  render() {
    return (
      <form onSubmit={this.props.blogSubmit}>
        <label>
          <input type="text" value={this.state.title} placeholder="title" onChange={this.handleChange} />
          <input type="text" value={this.state.content} placeholder="content" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

export default BlogForm;




