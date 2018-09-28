import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./rootReducer";
import promiseMiddleware from 'redux-promise-middleware';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;