import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ROUTES from '@consts/route';
import Home from '@screens/Home';
import Login from '@screens/Login';
import PropTypes from 'prop-types';
import actionCreators from '@redux/login/actions';

import ValidateRoute from './components/ValidateRoute';

class RouteCheck extends Component {
  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    const appIsLoaded = this.props.appIsLoaded;
    return !appIsLoaded ? (
      <div>Loading...</div>
    ) : (
      <Router>
        <Switch>
          <ValidateRoute exact path={ROUTES.LOGIN} component={Login} />
          <ValidateRoute isPrivate component={Home} />
        </Switch>
      </Router>
    );
  }
}

RouteCheck.propTypes = {
  appIsLoaded: PropTypes.bool.isRequired,
  loadApp: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  appIsLoaded: state.login.appIsLoaded
});

const mapDispatchToProps = dispatch => ({
  loadApp: () => dispatch(actionCreators.loadApp())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteCheck);
