const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const initialState = {
    products: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existItem = state.products.find(product => 
                product._id === action.product._id
            );
            const updatedProducts = state.products.map(product => 
                product._id === action.product._id ? action.product : product
            );
            const products = existItem ? updatedProducts : [ ...state.products, action.product ];
            
            return { ...state, products }

        case REMOVE_FROM_CART:
            return {
                ...state,
                products: state.products.filter(item => item._id !== action.id)
            }
    
        default:
            return state;
    }
};

const addToCart = (product) => ({ type: ADD_TO_CART, product });
const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, id });

export const setNewProduct = (product, itemsQuantity) => (dispatch) => {   
    dispatch(addToCart({ ...product, itemsQuantity }));
};

export const removeProduct = (id) => (dispatch) => {
    dispatch(removeFromCart(id));
};

export default cartReducer;