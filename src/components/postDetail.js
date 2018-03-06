import React, { Component } from 'react';

const PostDetail = (props) => {
  if ( Object.keys(props.post).length === 0 && props.post.constructor === Object) {
    return (
      <div className="panel-content">
        <div className="panel-content-image"></div>
        <div className="panel-content-body">
          <h3>
            Select a book to see the details
          </h3>
          <p>oops!</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="panel-content">
        <div className="panel-content-image">
          <img src={props.post.image}
            alt="temp image" />
        </div>
        <div className="panel-content-body">
          <h3>
            {props.post.title}
          </h3>
          <p>
            {props.post.body}
          </p>
        </div>
      </div>
    );
  }
}

export default PostDetail;
