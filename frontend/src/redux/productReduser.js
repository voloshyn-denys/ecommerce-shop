import { productsAPI } from '../api/api';

const SET_PRODUCTS = 'SET_PRODUCTS';

const initialState = {
    items: []
};

const productReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                items: action.products
            }    
        default:
            return state;
    }
};

export const setProducts = (products) => {
    return { type: SET_PRODUCTS, products };
};

export const getProducts = () => (dispatch) => {
    productsAPI.getProducts()
        .then((products) => {
            dispatch(setProducts(products));
        });
};

export default productReduser;