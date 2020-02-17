import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const initialState = {};

const middleware = [logger];

const store = createStore(rootReducer, 
  applyMiddleware(...middleware)
);

export default store;
