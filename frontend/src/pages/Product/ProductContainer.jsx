import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import Product from './Product';
import { setNewProduct } from '../../redux/cartReducer';
import { getProduct } from '../../redux/productReduser';
import Loader from '../../components/Loader/Loader';

const ProductContainer = (props) => {
    const {product, setNewProduct, history} = props;
    const { id } = props.match.params;

    useEffect(() => {
        props.getProduct(id)
    }, [id]);
    
    if (props.loadingMode) return <Loader />;
    if (props.errorMode) return 'ERROR';

    return (
        <Product product={product} setNewProduct={setNewProduct} history={history} />
    )
   
};

const mapStateToProps = (state) => ({
    product: state.product.product,
    loadingMode: state.product.loadingMode,
    errorMode: state.product.errorMode,
})

export default compose(
    connect(mapStateToProps, { getProduct, setNewProduct }),
    withRouter
)(ProductContainer);