import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import homeReduser from './homeReduser';
import productReduser from './productReduser';

const reducers = combineReducers({
  home: homeReduser,
  product: productReduser
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;