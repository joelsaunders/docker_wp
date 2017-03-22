import { combineReducers } from 'redux';

import ViewReducer from './view_reducer';
import PostsReducer from './posts_reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  currentView: ViewReducer
});


export default rootReducer;