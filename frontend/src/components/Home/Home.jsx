import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import s from "./Home.module.sass";

const Home = (props) => {
    const { products } = props;

    const productElements 
        = products.map((product) => <ProductCard key={product._id} product={product} />);

    return (
        <div className="main__content container">
            <h1 className="main__title">Home</h1>
            <div className={s.products}>
                { productElements }
            </div>
        </div>
    )
}

export default Home;