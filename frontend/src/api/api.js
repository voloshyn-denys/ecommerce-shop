import * as axios from 'axios';

export const userAPI = {
    fetchUser: async (email, password) => {
        const { data } = await axios.post(`/api/users/signin`, { email, password });
        return data;
    }
}

export const productsAPI = {
    fetchProductItem: async (productId) => {
        const { data } = await axios.get(`/api/products/${productId}`);
        return data;
    },
    fetchProducts: async () => {
        const { data } = await axios.get('/api/products');
        return data;
    }
};