import React, { Component } from 'react';
import PostNew from './postNew';

class PostList extends Component {
  renderPosts() {
    return _.map(this.props.posts, post => {
      const postClassName = `list-group-item ${(this.props.postActive.id === post.id) ? 'active': ''}`;
      return (
        <li
          className={ postClassName }
          onClick={() => this.props.selectPost(post)}
          key={post.id}>
          {post.title}
        </li>
      );
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
          onClick={ () => this.props.togglePostAddForm(this.props.postFormVisible) }>
          Add Post
        </div>
        <PostNew
          postFormVisible={this.props.postFormVisible}
          togglePostAddForm={this.props.togglePostAddForm}
          hidePostAddForm={this.props.hidePostAddForm}
          forceUpdate={this.forceUpdate}
        />
      </div>
    );
  }
}

export default PostList;
