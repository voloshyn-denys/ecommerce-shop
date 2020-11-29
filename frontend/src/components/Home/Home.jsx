import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import s from "./Home.module.sass";

const Home = () => {
    return (
        <div className="main__content container">
            <h1 className="main__title">Home</h1>
            <div className={s.products}>
                <ProductCard productId={1} />
                <ProductCard productId={2} />
                <ProductCard productId={3} />
                <ProductCard productId={4} />
            </div>
        </div>
    )
}

export default Home;