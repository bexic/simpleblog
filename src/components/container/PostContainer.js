import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostActions from '../../actions/postActions';
import PostList from '../postList';
import PostDetail from '../postDetail';
import _ from 'lodash';

class PostContainer extends Component {
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
          postActive={this.props.postActive}
          postFormVisible={this.props.postFormVisible}
          selectPost={this.props.actions.selectPost}
          togglePostAddForm={this.props.actions.togglePostAddForm}
          showPostAddForm={this.props.actions.showPostAddForm}
          hidePostAddForm={this.props.actions.hidePostAddForm}
        />
        <PostDetail post={this.props.postActive} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    postActive: state.postActive,
    postFormVisible: state.postFormVisible
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PostActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
