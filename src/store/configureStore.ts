import { applyMiddleware, createStore } from 'redux';

import rootReducer from './rootReducer';

const configureStore = (initialState, ...middlewares) =>
  createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default configureStore;
