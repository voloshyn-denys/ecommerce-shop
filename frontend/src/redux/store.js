import { combineReducers, createStore } from "redux";
import productReduser from './productReduser';

const reducers = combineReducers({
  products: productReduser
})

const store = createStore(reducers);

export default store;

window.store = store;