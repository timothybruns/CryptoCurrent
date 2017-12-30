import React from 'react';

class Blog extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      post: [],
    };
  }

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

  render() {
    return (
      <div className="blog">
      {this.state.post.length > 0 &&
      <div>
        <h1>{this.state.post[0].title}</h1>
        <h2>{this.state.post[0].content}</h2>
      </div>
      }
      </div>
    )
  }
};

export default Blog;
