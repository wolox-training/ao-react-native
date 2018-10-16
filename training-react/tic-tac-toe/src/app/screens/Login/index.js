import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '@redux/login/actions';
import { func } from 'prop-types';

import Layout from './layout';

function login({ handleSubmit }) {
  return <Layout onSubmit={handleSubmit} />;
}

login.propTypes = {
  handleSubmit: func.isRequired
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  handleSubmit: user => dispatch(actionCreators.authUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(login);
