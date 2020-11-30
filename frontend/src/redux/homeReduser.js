import { productsAPI } from '../api/api';

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_LOADING_MODE = 'SET_LOADING_MODE';
const SET_ERROR_MODE = 'SET_ERROR_MODE';

const initialState = {
    products: [],
    loadingMode: false,
    errorMode: false
};

const homeReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        case SET_LOADING_MODE:
            return {
                ...state,
                loadingMode: action.loadingMode
            }
        case SET_ERROR_MODE:
            return {
                ...state,
                errorMode: action.errorMode
            }
        default:
            return state;
    }
};

const setProductsList = (products) => {
    return { type: SET_PRODUCTS, products };
};
const setLoadingMode = (loadingMode) => {
    return { type: SET_LOADING_MODE, loadingMode };
};
const setErrorMode = (errorMode) => {
    return { type: SET_ERROR_MODE, errorMode };
};

export const getProducts = () => async (dispatch) => {
    dispatch(setLoadingMode(true));
    try {
        const products = await productsAPI.fetchProducts();
        dispatch(setLoadingMode(false));
        dispatch(setProductsList(products));
    } catch {
        dispatch(setLoadingMode(false));
        dispatch(setErrorMode(true));
    }
};

export default homeReduser;