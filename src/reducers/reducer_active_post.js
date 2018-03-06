import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.posts, action) {
  switch (action.type) {
    case actionTypes.POST_SELECTED:
      return action.payload;
  }
  return state;
}
