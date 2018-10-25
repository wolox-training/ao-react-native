import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ROUTES from '@consts/route';
import Home from '@screens/Home';
import Login from '@screens/Login';
import ErrorPage from '@screens/ErrorPage';
import PropTypes from 'prop-types';
import actionCreators from '@redux/login/actions';

import ValidateRoute from './components/ValidateRoute';

class RouteCheck extends Component {
  componentDidMount() {
    const { validateIsLogin } = this.props;
    validateIsLogin();
  }

  render() {
    const { loading } = this.props;
    return (
      !loading && (
        <Router>
          <Switch>
            <ValidateRoute exact path={ROUTES.LOGIN} component={Login} />
            <ValidateRoute isPrivate component={Home} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      )
    );
  }
}

RouteCheck.propTypes = {
  validateIsLogin: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  loading: state.login.loading
});

const mapDispatchToProps = dispatch => ({
  validateIsLogin: () => dispatch(actionCreators.validateIsLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteCheck);
