import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function ( state = initialState.activePost, action ) {
  switch (action.type) {
    case actionTypes.FETCH_POST:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
