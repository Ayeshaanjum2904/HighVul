import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import thunk from 'redux-thunk';
import reducers from './reducers';
import history from './history';

const middlewares = [
  routerMiddleware(history),
  thunk,
];

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  reducers,
  {},
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

export default store;
