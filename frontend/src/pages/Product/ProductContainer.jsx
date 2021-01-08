import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import Product from './Product';
import Loader from '../../components/Loader/Loader';
import {inject, observer} from 'mobx-react'


const ProductContainer = (props) => {
    const { history } = props;
    const { id } = props.match.params;

    const { product, loadingMode, errorMode, getProduct } = props.productStore;
    const { setNewProduct } = props.cartStore;
    
    useEffect(() => {
        getProduct(id)
    }, [getProduct, id]);
    
    if (loadingMode) return <Loader />;
    if (errorMode) return 'ERROR';

    return (
        <Product 
            product={product} 
            setNewProduct={setNewProduct}
            history={history} 
        />
    )
   
};
export default withRouter(inject('cartStore', 'productStore')(observer(ProductContainer)));