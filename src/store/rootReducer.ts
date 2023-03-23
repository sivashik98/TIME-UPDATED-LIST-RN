import { combineReducers } from 'redux';

import profile from './reducers/profile';
import news from './reducers/news';
import post from './reducers/post';

const rootReducer = combineReducers({
  profile,
  news,
  post,
});

export default rootReducer;
