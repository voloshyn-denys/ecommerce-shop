import * as axios from 'axios';

export const productsAPI = {
    fetchProductItem: (productId) => {
        return axios.get(`/api/product/${productId}`)
            .then((res) => res.data);
    },
    fetchProducts: () => {
        return axios.get('/api/products')
            .then((res) => res.data);
    }
};