import React from 'react';
import s from './ProductCard.module.sass';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { product } = props;
    const status = product.quantity > 0 ? 'In Stock' : 'Not available';

    return (
        <div className={s.card}>
            <h3 className={s.card__title}>{ product.name }</h3>
            <Link to={`/product/${product._id}`} className={s.card__photo}>
                <img src={ product.photos[0] } alt={ product.name } />
            </Link>
            <div className={s.card__more}>
                <div className={s.card__price}>${ product.price }</div>
                <div className="product__status">
                    { status }. Qty: { product.quantity }
                </div>
                <div className="product__rating">
                    <span>{ product.rating.reviews } Reviews</span>
                </div>
                <Link to={`/product/${product._id}`} className={`${s.card__button} button`}>See more details</Link>
            </div>
        </div>
    )
}

export default ProductCard;