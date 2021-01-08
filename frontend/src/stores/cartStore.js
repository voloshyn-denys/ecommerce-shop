import { action, makeObservable, observable } from "mobx";

export default class cartStore {
    products = localStorage.getItem('cartProducts') 
        ? JSON.parse(localStorage.getItem('cartProducts'))
        : [];

    constructor(){
        makeObservable(this, {
            products: observable,
            addToCart: action,
            removeFromCart: action
        })
    }

    addToCart = (product) => {
        const existItem = this.products.find(item => 
            item._id === product._id
        );
        const updatedProducts = this.products.map(item => 
            item._id === product._id ? product : item
        );
        const products = existItem ? updatedProducts : [ ...this.products, product ];
        
        this.products = products;
    };

    removeFromCart = (id) => {
        this.products = this.products.filter(item => item._id !== id)
    };

    setNewProduct = (product, itemsQuantity) => {   
        this.addToCart({ ...product, itemsQuantity });
        localStorage.setItem('cartProducts', JSON.stringify(this.products))
    };
    
    removeProduct = (id) => {
        this.removeFromCart(id);
    };
}