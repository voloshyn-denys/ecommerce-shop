import * as axios from 'axios';

export const productsAPI = {
    getProducts: () => {
        return axios.get('/api/products')
            .then((res) => res.data);
    }
};