import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { signin } from '../../redux/userReducer';
import Signin from './Signin';

const mapStateToProps = (state) => ({
    user: state.users.user
})

export default compose(
    connect(mapStateToProps, { signin }),
    withRouter
)(Signin);