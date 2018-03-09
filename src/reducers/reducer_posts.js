import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export function postsFetch( state = initialState.posts, action ) {
  switch (action.type) {
    case actionTypes.POST_FETCH:
      return _.mapKeys(action.payload.data, 'id');
    case actionTypes.POST_CREATE:
      return {...state, id: action.payload.data};
    default:
      return state;
  }
}

export function postsActive(state = initialState.postActive, action) {
  switch (action.type) {
    case actionTypes.POST_SELECT:
      return action.payload;
  }
  return state;
}

export function postToggleForm(state = initialState.postFormVisible, action) {
  switch (action.type) {
    case actionTypes.POST_SHOW_FORM:
      return action.payload;
    case actionTypes.POST_HIDE_FORM:
      return action.payload;
    case actionTypes.POST_TOGGLE_FORM:
      return action.payload;
  }
  return state;
}
