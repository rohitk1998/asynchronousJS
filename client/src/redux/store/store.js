import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from '../reducers/rootReducer';
import { rootSaga } from '../saga/index';
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  // redux devtools
  const enhancers =
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);
  // create redux store
  const store = createStore(persistedReducer, enhancers);
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};

export default configureStore;