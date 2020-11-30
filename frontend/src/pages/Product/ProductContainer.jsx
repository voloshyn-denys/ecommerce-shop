import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import Product from './Product';
import { getProduct } from '../../redux/productReduser';

const ProductContainer = (props) => {
    const { id } = props.match.params;

    useEffect(() => {
        props.getProduct(id)
    }, []);
    
    return <Product product={props.product} />
};

const mapStateToProps = (state) => ({
    product: state.product.product
})

export default compose(
    connect(mapStateToProps, { getProduct }),
    withRouter
)(ProductContainer);