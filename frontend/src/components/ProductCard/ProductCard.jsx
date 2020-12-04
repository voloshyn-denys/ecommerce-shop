import React from 'react';
import s from './ProductCard.module.sass';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { product } = props;

    return (
        <div className={s.card}>
            <Link to={`/product/${product._id}`} className={s.card__photo}>
                <img src={ product.photos[0] } alt={ product.name } />
            </Link>
            <div className={s.card__more}>
                <Link to={`/product/${product._id}`} className={s.card__title}>
                    <h3 className={s.card__heading}>{ product.name }</h3>
                </Link>
                <div className="product__rating">
                    <span>{ product.rating.reviews } Reviews</span>
                </div>
                <div className={s.card__price}>${ product.price }</div>
            </div>
        </div>
    )
}

export default ProductCard;