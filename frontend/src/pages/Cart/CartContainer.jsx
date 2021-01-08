import Cart from './Cart';
import { inject, observer } from 'mobx-react';

const CartContainer = (props) => {
    const {products, removeProduct, setNewProduct} = props.cartStore;
    const priceTotal = products.reduce((acc, item) => acc + item.price * item.itemsQuantity, 0)

    return <Cart 
        products={products} 
        priceTotal={priceTotal} 
        removeProduct={removeProduct} 
        setNewProduct={setNewProduct} 
    />
}

export default inject('cartStore')(observer(CartContainer));