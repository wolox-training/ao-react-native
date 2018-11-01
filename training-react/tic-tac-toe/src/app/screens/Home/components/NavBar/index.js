import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActionCreators from '@redux/login/actions';

import Layout from './layout';

function NavBar({ signOutUser }) {
  return <Layout handleClick={signOutUser} />;
}

NavBar.propTypes = {
  signOutUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(ActionCreators.logout())
});

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
