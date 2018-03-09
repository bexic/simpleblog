import * as actionTypes from './actionTypes';
import postApi from './postApi';

export function fetchPosts() {
  const request = postApi.fetchPosts();
  return {
    type: actionTypes.POST_FETCH,
    payload: request
  };
}

export function createPost(values) {
  const request = postApi.createPost(values);
  return {
    type: actionTypes.POST_CREATE,
    payload: request
  };
}

export function selectPost(post) {
  return {
    type: actionTypes.POST_SELECT,
    payload: post
  };
}

export function togglePostAddForm(postFormVisible) {
  return {
    type: actionTypes.POST_TOGGLE_FORM,
    payload: !postFormVisible
  };
}

export function showPostAddForm(postFormVisible) {
  return {
    type: actionTypes.POST_SHOW_FORM,
    payload: true
  };
}

export function hidePostAddForm(postFormVisible) {
  return {
    type: actionTypes.POST_SHOW_FORM,
    payload: false
  };
}
