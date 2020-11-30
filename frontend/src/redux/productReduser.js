import { productsAPI } from '../api/api';

const SET_PRODUCT = 'SET_PRODUCT';
const SET_LOADING_MODE = 'SET_LOADING_MODE';
const SET_ERROR_MODE = 'SET_ERROR_MODE';

const initialSate = {
    product: {},
    loadingMode: false,
    errorMode: false
};

const productReduser = (state = initialSate, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                product: action.product
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

const setProduct = (product) => {
    return { type: SET_PRODUCT, product };
};
const setLoadingMode = (loadingMode) => {
    return { type: SET_LOADING_MODE, loadingMode };
};
const setErrorMode = (errorMode) => {
    return { type: SET_ERROR_MODE, errorMode };
};

export const getProduct = (productId) => async (dispatch) => {
    dispatch(setLoadingMode(true));
    
    try {
        const product = await productsAPI.fetchProductItem(productId);
        dispatch(setLoadingMode(false));
        dispatch(setProduct(product));
    } catch {
        dispatch(setLoadingMode(false));
        dispatch(setErrorMode(true));
    }
};

export default productReduser;