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
    return <Layout loading={this.props.loading} />;
  }
}

RouteCheck.propTypes = {
  loadApp: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = ({ login }) => ({
  loading: login.loading
});

const mapDispatchToProps = dispatch => ({
  loadApp: () => dispatch(actionCreators.loadApp())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteCheck);
