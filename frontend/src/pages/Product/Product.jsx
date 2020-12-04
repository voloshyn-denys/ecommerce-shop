import React from 'react';
import s from './Product.module.sass';
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { product, setNewProduct, history } = props;

    const handleAddButtonClick = () =>{
        setNewProduct(product);
        history.push('/cart');
    }

    return <>
        <div className="breadcrumbs">
            <div className="container">
                <h3>Product Details</h3>
                <div>
                    <Link to="/">Products</Link>
                    {''} | {''}
                    <b>Product Details</b>
                </div>
            </div>
        </div>
        <div className="container">
            
            <div className={s.product}>
                <div className={s.product_main}>
                    
                    {
                        <div className={s.product_photo}>
                            <img src={ product.photos[0] } alt={ product.name } />
                        </div>
                    }
                </div>
                <aside className={s.product_aside}>
                    <div className={s.product_info}>
                        <h1 className={s.product_title}>{product.name}</h1>
                        <div>{ product.rating.reviews } Reviews</div>
                        <span className={s.product_price}>${ product.price }</span>
                        <div className={s.product_description}>{product.description}</div>
                        
                        
                        
                        <button
                            onClick={() => { handleAddButtonClick() } }
                            className={`${s.product_info_button} button`}>
                                Add to cart
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    </>;
};

export default Product;