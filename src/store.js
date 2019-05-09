import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './redux/reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  const store = createStore(
    reducers,
    loadState(),
    applyMiddleware(...middlewares)
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};

export default configureStore();
