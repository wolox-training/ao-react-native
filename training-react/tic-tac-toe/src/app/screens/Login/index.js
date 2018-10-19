import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '@redux/login/actions';
import { func, bool, string } from 'prop-types';

import Layout from './layout';

function Login({ handleSubmit, hasErrorAuth, msgError }) {
  return <Layout onSubmit={handleSubmit} hasError={hasErrorAuth} msgError={msgError} />;
}

Login.propTypes = {
  handleSubmit: func.isRequired,
  hasErrorAuth: bool.isRequired,
  msgError: string.isRequired
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
