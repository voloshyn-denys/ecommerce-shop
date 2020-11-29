import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import productReduser from './productReduser';

const reducers = combineReducers({
  products: productReduser
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;