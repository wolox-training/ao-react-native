import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '@redux/login/actions';
import PropTypes from 'prop-types';

import Layout from './layout';

function Login({ handleSubmit, hasErrorAuth, msgError }) {
  return <Layout onSubmit={handleSubmit} hasError={hasErrorAuth} msgError={msgError} />;
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  hasErrorAuth: PropTypes.bool.isRequired,
  msgError: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  hasErrorAuth: state.login.hasErrorAuth,
  msgError: state.login.msgError
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: user => dispatch(actionCreators.authUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
