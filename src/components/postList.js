import React, { Component } from 'react';
import PostNew from './postNew';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddPost: true
    };
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li
          className={(this.props.activePost.id === post.id) ? "list-group-item active" : "list-group-item"}
          onClick={() => this.props.selectPost(post)}
          key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  toggleAddPost() {
    this.setState({
      isAddPost: !this.state.isAddPost
    });
  }

  render() {
    return (
      <div className="panel-side">
        <div className="panel-side-header">
          <span className="logo">پ</span>
          <span className="title">SimpleBlog</span>
        </div>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
        <div
          className="add-post"
          onClick={ () => this.toggleAddPost() }>
          Add Post
        </div>
        <PostNew isAddPost={this.state.isAddPost} />
      </div>
    );
  }
}

export default PostList;
