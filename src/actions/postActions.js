import * as actionTypes from './actionTypes';
import postApi from './postApi';

export function fetchPosts() {
  const request = postApi.fetchPosts();

  return {
    type: actionTypes.FETCH_POST,
    payload: request
  };
}

export function selectPost(post) {
  return {
    type: actionTypes.POST_SELECTED,
    payload: post
  };
}
