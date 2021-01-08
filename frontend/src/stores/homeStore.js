import { productsAPI } from '../api/api';
import { makeObservable, action, observable } from 'mobx';

export default class homeStore {
    products = []
    loadingMode = true
    errorMode = false

    constructor() {
        makeObservable(this, {
            products: observable,
            loadingMode: observable,
            errorMode: observable,
            setProductsList: action,
            setLoadingMode: action,
            setErrorMode: action,
        })
    };

    setProductsList(products) {
        this.loadingMode = false
        this.products = products
    };
    setLoadingMode = () => {
        this.loadingMode = true
    };
    setErrorMode = () => {
        this.loadingMod = false
        this.errorMode = true
    };

    getProducts = async () => {
        try {
            this.setLoadingMode();
            const products = await productsAPI.fetchProducts();
            this.setProductsList(products);
        } catch {
            this.setErrorMode();
        }
    };
}