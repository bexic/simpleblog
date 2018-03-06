import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostActions from '../../actions/postActions';
import PostList from '../postList';
import PostDetail from '../postDetail';
import _ from 'lodash';

class PostContainer extends React.Component {
  componentDidMount() {
    if ( _.size(this.props.posts) === 0 ) {
      this.props.actions.fetchPosts();
    }
  }

  render() {
    return (
      <div className="panel">
        <PostList
          posts={this.props.posts}
          activePost={this.props.activePost}
          selectPost={this.props.actions.selectPost}
          showAddPost={this.props.actions.showAddPost}
          />
        <PostDetail
          post={this.props.activePost}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    activePost: state.activePost
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PostActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
