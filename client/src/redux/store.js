import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer.js';
import thunk from 'redux-thunk';

const composeEnhancers =
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE ||
   compose;

const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunk)),
);

export default store;