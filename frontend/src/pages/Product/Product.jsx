import React from 'react';

const Product = (props) => {
    const { product } = props

    return (
        <div className="container">
            <h2>{product.name}</h2>
        </div>
    );
};

export default Product;