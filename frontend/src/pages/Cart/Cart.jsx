import React from 'react';
import { Link } from 'react-router-dom';
import s from './Cart.module.sass';

const Cart = (props) => {
    const { products, priceTotal, removeProduct } = props;

    const productsElements = products.map(product => (
        <div key={product._id} className={s.product}> 
            <div className={s.product_col}>
                <div className={s.product_photo}>
                    <img src={product.photos[0]} alt={product.name}/>
                </div>
            </div>
            <div className={s.product_col}>
                <b>{product.name} </b>
            </div>
            <div className={s.product_col}>
                ${product.price}
            </div>
            <div className={s.product_col}>
                <span className={s.product_remove} onClick={() => { removeProduct(product._id)}}>✖</span>
            </div>
            
        </div>
    ));
    
    return <>
        <div className="breadcrumbs">
            <div className="container">
                <h3>Cart</h3>
                <div>
                    <Link to="/">Products</Link>
                    {''} | {''} 
                    <b>Cart</b>
                </div>
            </div>
        </div>
        
        <div className='container'>
            <div className={s.cart}>
                <div className={s.cart_main}>
                    {
                        products.length > 0 ? 
                            productsElements: 
                            <h2>Cart is emty. There isn't any items here.</h2>
                    }
                </div>
                <div className={s.cart_aside}>
                    {
                        products.length > 0 && <>
                            <h3 className={s.cart_total_title}><b>Cart total</b></h3>
                            <div className={s.cart_total_row}>
                                <div className={s.cart_total_col}>Grand total:</div>
                                <div className={s.cart_total_col}>
                                    <b className={s.cart_total_price}>${priceTotal}</b>
                                </div>
                            </div>
                            
                        </>
                    }
                </div>
            </div>
        </div>
    </>
};

export default Cart;