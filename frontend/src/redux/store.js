import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import cartReducer from "./cartReducer";
import homeReduser from './homeReduser';
import productReduser from './productReduser';
import userReducer from "./userReducer";

const reducers = combineReducers({
  home: homeReduser,
  product: productReduser,
  cart: cartReducer,
  users: userReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;