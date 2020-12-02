import { connect } from 'react-redux';
import Cart from './Cart';
import {removeProduct} from '../../redux/cartReducer';

const mapStateToProps = (state) => {
    return {
        products: state.cart.products
    }
}

export default connect(mapStateToProps, { removeProduct })(Cart);