import React, { Component } from 'react';

const PostDetail = (props) => {
  const post = props.post;

  return (
    <div className="panel-content">
      <div className="panel-content-image">
        <img src={post.image} alt={post.tag} />
      </div>
      <div className="panel-content-body">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetail;
