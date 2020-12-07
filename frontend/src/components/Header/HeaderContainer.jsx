import { connect } from "react-redux";
import Header from './Header';
import { signout } from '../../redux/userReducer';

const mapStateToProps = (state) => ({
    cartCount: state.cart.products.length,
    user: state.users.user
});

export default connect(mapStateToProps, { signout })(Header);