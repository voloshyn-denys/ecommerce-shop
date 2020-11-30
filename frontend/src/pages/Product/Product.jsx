import React from 'react';
import { withRouter } from "react-router";

const Product = (props) => {
    const { match } = props;
    const { productId } = match.params;

    return (
        <div className="container">
            <h2>Product { productId }</h2>
        </div>
    );
};

export default withRouter(Product);