import React from 'react';
import s from './ProductCard.module.sass';
import card_src from '../../../assets/images/card_image.jpg';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { productId } = props;

    return (
        <div className={s.card}>
            <h3 className={s.card__title}>Card Title { productId }</h3>
            <Link to={`/product/${productId}`} className={s.card__photo}>
                <img src={card_src} alt="Card" />
            </Link>
            <div className={s.card__more}>
                <div className={s.card__price}>$100</div>
                <div className="product__status product__status--red">
                    In Stock. Qty: 15
                </div>
                <div className="product__rating">
                    <span>13 Reviews</span>
                </div>
                <Link to={`/product/${productId}`} className={`${s.card__button} button`}>See more details</Link>
            </div>
        </div>
    )
}

export default ProductCard;