import { productsAPI } from '../api/api';

const PRODUCT_FETCH_SUCCESS = 'PRODUCT_FETCH_SUCCESS';
const PRODUCT_FETCH_LOADING = 'PRODUCT_FETCH_LOADING';
const PRODUCT_FETCH_ERROR = 'PRODUCT_FETCH_ERROR';

const initialSate = {
    product: {},
    loadingMode: true,
    errorMode: false
};

const productReduser = (state = initialSate, action) => {
    switch (action.type) {
        case PRODUCT_FETCH_SUCCESS:
            return {
                ...state,
                loadingMode: false,
                product: action.product
            }
        case PRODUCT_FETCH_LOADING:
            return {
                ...state,
                loadingMode: true
            }
        case PRODUCT_FETCH_ERROR:
            return {
                ...state,
                loadingMode: false,
                errorMode: true
            }
        default:
            return state;
    }
};

const setProduct = (product) => {
    return { type: PRODUCT_FETCH_SUCCESS, product };
};
const setLoadingMode = () => {
    return { type: PRODUCT_FETCH_LOADING };
};
const setErrorMode = () => {
    return { type: PRODUCT_FETCH_ERROR };
};

export const getProduct = (productId) => async (dispatch) => {
    try {
        dispatch(setLoadingMode());
        const product = await productsAPI.fetchProductItem(productId);
        dispatch(setProduct(product));
    } catch {
        dispatch(setErrorMode());
    }
};

export default productReduser;