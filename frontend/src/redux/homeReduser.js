import { productsAPI } from '../api/api';

const PRODUCTS_FETCH_SUCCESS = 'PRODUCTS_FETCH_SUCCESS';
const PRODUCTS_FETCH_ERROR = 'PRODUCTS_FETCH_ERROR';
const PRODUCTS_FETCH_LOADING = 'PRODUCTS_FETCH_LOADING';

const initialState = {
    products: [],
    loadingMode: true,
    errorMode: false
};

const homeReduser = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_FETCH_SUCCESS:
            return {
                ...state,
                loadingMode: false,
                products: action.products
            }
        case PRODUCTS_FETCH_LOADING:
            return {
                ...state,
                loadingMode: true
            }
        case PRODUCTS_FETCH_ERROR:
            return {
                ...state,
                loadingMode: false,
                errorMode: true
            }
        default:
            return state;
    }
};

const setProductsList = (products) => {
    return { type: PRODUCTS_FETCH_SUCCESS, products };
};
const setLoadingMode = () => {
    return { type: PRODUCTS_FETCH_LOADING };
};
const setErrorMode = () => {
    return { type: PRODUCTS_FETCH_ERROR };
};

export const getProducts = () => async (dispatch) => {
    try {
        dispatch(setLoadingMode());
        const products = await productsAPI.fetchProducts();
        dispatch(setProductsList(products));
    } catch {
        dispatch(setErrorMode());
    }
};

export default homeReduser;