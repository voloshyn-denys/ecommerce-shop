import { action, makeAutoObservable, observable } from 'mobx';
import { productsAPI } from '../api/api';

export default class productStore {
    product = {}
    loadingMode = true
    errorMode = false

    constructor(){
        makeAutoObservable(this, {
            product: observable,
            loadingMode: observable,
            errorMode: observable,
            setProduct: action,
            setErrorMode: action,
            setLoadingMode: action
        })
    }

    setProduct = (product) => {
        this.loadingMode = false;
        this.product = product;
    };

    setLoadingMode = () => {
        this.loadingMode = true;
    };

    setErrorMode = () => {
        this.loadingMode = false;
        this.errorMode = true;
    };

    getProduct = async (productId) => {
        try {
            this.setLoadingMode()
            const product = await productsAPI.fetchProductItem(productId);
            this.setProduct(product);
        } catch {
            this.setErrorMode();
        }
    };
};