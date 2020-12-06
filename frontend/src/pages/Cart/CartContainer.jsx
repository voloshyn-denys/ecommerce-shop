import { connect } from 'react-redux';
import Cart from './Cart';
import {removeProduct, setNewProduct} from '../../redux/cartReducer';

const mapStateToProps = (state) => {
    return {
        products: state.cart.products,
        priceTotal: state.cart.products.reduce((acc, item) => acc + item.price * item.itemsQuantity, 0)
    }
}

export default connect(mapStateToProps, { removeProduct, setNewProduct })(Cart);