// import { productsAPI } from "../api/api";

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const initialState = {
    products: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                products: [
                    action.product,
                    ...state.products.filter(item => item._id !== action.product._id)
                ]
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                products: [ ...state.products.filter(item => item._id !== action.id) ]
            }
    
        default:
            return state;
    }
};

const addToCart = (product) => ({ type: ADD_TO_CART, product });
const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, id });

export const setNewProduct = (product) => async (dispatch) => {
    dispatch(addToCart(product));
};

export const removeProduct = (id) => async (dispatch) => {
    dispatch(removeFromCart(id));
};

export default cartReducer;