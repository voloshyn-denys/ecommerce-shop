import React from 'react';
import s from './Product.module.sass';
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { product, setNewProduct, history } = props;
    const status = product.quantity > 0 ? 'In Stock' : 'Not available';

    const handleAddButtonClick = () =>{
        setNewProduct(product);
        history.push('/cart');
    }

    return (
        <div className="container">
            <div className={s.product}>
                <div className={s.product_main}>
                    <Link to="/" className={s.product_back}>Back to results</Link>
                    {
                        <div className={s.product_photo}>
                            <img src={ product.photos[0] } alt={ product.name } />
                        </div>
                    }
                </div>
                <aside className={s.product_aside}>
                    <div className={s.product_info}>
                        <h1>{product.name}</h1>
                        <span className={s.product_price}>${ product.price }</span>
                        <div>{ status }. Qty: { product.quantity }</div>
                        <div>{ product.rating.reviews } Reviews</div>
                        <br/>
                        {product.description}
                        <button
                            onClick={() => { handleAddButtonClick() } }
                            className={`${s.product_info_button} button`}>
                                Add to cart
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Product;