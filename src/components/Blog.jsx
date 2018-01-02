import React from 'react';
import { Redirect } from 'react-router-dom';

class Blog extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      post:  [],
      id: null,
      editButtonClick: false,
      deleted: false,
      title:   '',
      content: '',
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
  }

  // turn the url into string
  // used regex to grab a number from the string
  // used the match method to find where the id of the url matches
  // parse the match to find the match of the first item in the array, post (empty)
  // pass blogs props down by assigning to a variable
  // filter through the posts to see where the post id matches the url id
  // render just that blog post's title and content

  componentDidMount(){
    const str = this.props.match.url;
    const reg = /(\d+)/;
    const match = str.match(reg);
    const url_id = parseInt(match[0]);
    const posts = this.props.blogs;
    const post = posts.filter(post => post.id === url_id);
    this.setState({
      post: post,
      id: post[0].id,
      title: post[0].title,
      content: post[0].content,
    });
  }

  handleDelete(e) {
    // console.log(this.state.post[0].id);
    {this.props.deleteBlog(this.state.post[0].id)}
    this.setState({
      deleted: true,
    })
  }

  handleChange(e) {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      [name]: val,
    });
  }

  showEditForm() {
    this.setState({
      editButtonClick: true,
    });
  }

  handleEdit(e) {
    e.preventDefault();
    {this.props.editBlog(e, this.state, this.state.id)}
  }


  // show blog detail, with conditional rendering based on which button clicked
  render() {
    return (
      <div>
        {this.state.editButtonClick === false ? (

          // this checks for condition of deleted button clicked or not
          <div>
          {this.state.deleted === false ? (
          <div className="blog">
            {this.state.post.length > 0 &&
              <div>
                <h1>{this.state.post[0].title}</h1>
                <h2>{this.state.post[0].content}</h2>
                <br />
                <button className="delete" onClick={this.handleDelete}> Delete </button>
                <button className="edit" onClick={this.showEditForm}> Edit </button>
              </div>
            }
          </div>
          ) : (
            <Redirect to="/" />
          )}
          </div>
      ) : (

      // edit form here
        <div className="edit">
          <form onSubmit={this.handleEdit}>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
            <input
              type="text"
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <input type="submit" value="Edit" />
          </form>
        </div>
      )}
      </div>
    );
  }
}

export default Blog;
