import React from 'react';

class Blog extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      post: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
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
    const post = posts.filter(post => post.id == url_id);
    this.setState({
      post: post,
    });
  }

  handleDelete(e) {
    // console.log(this.state.post[0].id);
    {this.props.deleteBlog(this.state.post[0].id)}
  }

  render() {
    return (
      <div className="blog">
      {this.state.post.length > 0 &&
      <div>
        <h1>{this.state.post[0].title}</h1>
        <h2>{this.state.post[0].content}</h2>
        <br/>
        <button className="delete" onClick={this.handleDelete}> Delete </button>
      </div>
      }
      </div>
    );
  }
};

export default Blog;
