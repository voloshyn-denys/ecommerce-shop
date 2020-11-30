import React from 'react';

const Product = (props) => {
    const { product } = props;
    const status = product.quantity > 0 ? 'In Stock' : 'Not available';

    return (
        <div className="container">
            <div>
                <div>
                    <h1>{product.name}</h1>
                    {
                        <div>
                            <img src={ product.photos[0] } alt={ product.name } />
                        </div>
                    }
                    {product.description}
                </div>
                <div>
                    <div>
                        {product.name} <br/>
                        ${ product.price } <br/>
                        { status }. Qty: { product.quantity } <br/>
                        <div>{ product.rating.reviews } Reviews</div>
                        <a href="/cart" className="button">Buy</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;