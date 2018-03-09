import { combineReducers } from 'redux';
import { postsFetch, postsActive, postToggleForm } from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: postsFetch,
  postActive: postsActive,
  postFormVisible: postToggleForm,
  form: formReducer
});

export default rootReducer;
