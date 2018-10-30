import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actionCreators from '@redux/login/actions';

import Layout from './layout';

class RouteCheck extends Component {
  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    const loading = this.props.loading;
    return <Layout loading={loading} />;
  }
}

RouteCheck.propTypes = {
  loadApp: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  loading: state.login.loading
});

const mapDispatchToProps = dispatch => ({
  loadApp: () => dispatch(actionCreators.loadApp())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteCheck);
