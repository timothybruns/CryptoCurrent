import React, { Component } from 'react';

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.blogs ? props.blogs.title : '',
      content: props.blogs ? props.blogs.content : '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

handleInputChange(e) {
  const name = e.target.name;
  const val = e.target.value;
  this.setState({
    [name]: val,
  });
}

render() {
    return (
      <div className="add">
        <form className={this.props.isAdd ? 'addform' : 'editform'}
          onSubmit={this.props.isAdd
            ? e => this.props.blogSubmit('POST', e, this.state)
            : e => this.props.blogSubmit('PUT', e, this.state, this.props.blogs.id)}>
        <div className="form-subcontainer">
            <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInputChange} />
            <input type="text" name="content" placeholder="Content" value={this.state.content} onChange={this.handleInputChange} />
        </div>
          <input type="submit" value={this.props.isAdd ? 'Add post' : 'Edit post'} />
         </form>
      </div>
    );
  }
}

export default BlogForm;
