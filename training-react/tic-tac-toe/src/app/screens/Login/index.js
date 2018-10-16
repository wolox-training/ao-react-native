import React from 'react';
import { connect } from 'react-redux';

import Layout from './layout';

const LoginContainer = () => <Layout />;

/* const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({}); */

export default connect(/* mapStateToProps,
  mapDispatchToProps */)(LoginContainer);
