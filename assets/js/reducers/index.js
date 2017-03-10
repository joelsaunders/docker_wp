import { combineReducers } from 'redux';
import ViewReducer from './view_reducer';

const rootReducer = combineReducers({
  currentView: ViewReducer
});


export default rootReducer;