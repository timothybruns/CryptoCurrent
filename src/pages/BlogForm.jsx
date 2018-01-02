import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:   '',
      content: '',
      user_id: 1,
      submitButtonClicked: false,
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
    this.setState({
      submitButtonClicked: true,
    });
  }

  render() {
    return (
      <div>
      {this.state.submitButtonClicked == false ? (
        <form onSubmit={this.handleSubmit}>
        <label>
          <input className="submitTitle" type="text" name="title" value={this.state.title} placeholder="title" onChange={this.handleChange} />
          <br></br><input className="submitPost" type="text" name="content" value={this.state.content} placeholder="content" onChange={this.handleChange} />
        </label>
        <br></br>
        <input className="submitButton" type="submit" value="Submit" />
      </form>
      ) : (
      <Redirect to="/" />
      )}
      </div>
    );
  }

}

export default BlogForm;

