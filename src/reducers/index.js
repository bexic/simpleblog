import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';
import ActivePost from './reducer_active_post';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  activePost: ActivePost,
  posts: PostReducer,
  form: formReducer
});

export default rootReducer;
