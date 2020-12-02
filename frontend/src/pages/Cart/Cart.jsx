import React from 'react';

const Cart = (props) => {
    const { products, removeProduct } = props;

    const productsElements = products.map(product => (
        <div key={product._id}> 
            <div>{product.name} </div> 
            <button onClick={() => { removeProduct(product._id)}}>x</button>
        </div>
    ));
    
    return (
        <div className='container'>
            {
                productsElements.length > 0 ? 
                    productsElements :
                    <h2>Cart is emty. There isn't any items here.</h2>
            }
        </div>
    )
};

export default Cart;