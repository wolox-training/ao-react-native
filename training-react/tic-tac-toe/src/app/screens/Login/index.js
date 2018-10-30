import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '@redux/login/actions';
import PropTypes from 'prop-types';
import HCO from '@components/HOC';

import Layout from './layout';

function Login({ handleSubmit, msgAuthError }) {
  return <Layout onSubmit={handleSubmit} msgAuthError={msgAuthError} />;
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  msgAuthError: PropTypes.string
};

const mapStateToProps = ({ login }) => ({
  msgAuthError: login.isAuthError,
  loading: login.isAuthLoading
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: user => dispatch(actionCreators.authUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HCO(Login));
