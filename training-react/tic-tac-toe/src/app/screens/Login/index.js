import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '@redux/login/actions';
import PropTypes from 'prop-types';
import HCO from '@components/HOC';

import Layout from './layout';

function Login({ handleSubmit, hasError }) {
  return <Layout onSubmit={handleSubmit} hasError={hasError} />;
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  hasError: PropTypes.string
};

const mapStateToProps = state => ({
  hasError: state.login.isAuthError,
  loading: state.login.isAuthLoading
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: user => dispatch(actionCreators.authUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HCO(Login));
