import { connect } from 'react-redux';
import Cart from './Cart';
import {removeProduct} from '../../redux/cartReducer';

const mapStateToProps = (state) => {
    return {
        products: state.cart.products,
        priceTotal: state.cart.products.reduce((acc, item) => acc + item.price, 0)
    }
}

export default connect(mapStateToProps, { removeProduct })(Cart);