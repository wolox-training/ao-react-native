import React from 'react';
import { connect } from 'react-redux';

import Login from './layout';

const LoginContainer = () => <Login />;

/* const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({}); */

export default connect(/* mapStateToProps,
  mapDispatchToProps */)(LoginContainer);
