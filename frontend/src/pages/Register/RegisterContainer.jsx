import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { register } from '../../redux/userReducer';
import Register from './Register';

const mapStateToProps = (state) => ({
    user: state.users.user
})

export default compose(
    connect(mapStateToProps, { register }),
    withRouter
)(Register);