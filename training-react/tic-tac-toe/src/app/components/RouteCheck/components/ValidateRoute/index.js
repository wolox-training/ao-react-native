import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ROUTES from '@consts/route';

class ValidateRoute extends PureComponent {
  renderRoute = props => {
    const { isPrivate, component: Component, isLogedIn } = this.props;
    if (isLogedIn && !isPrivate) {
      return (
        <Redirect
          to={{
            pathname: ROUTES.HOME,
            state: { from: props.location }
          }}
        />
      );
    } else if (!isLogedIn && isPrivate) {
      return (
        <Redirect
          to={{
            pathname: ROUTES.LOGIN,
            state: { from: props.location }
          }}
        />
      );
    }

    return <Component {...props} />;
  };

  render() {
    const { isPrivate, component: Component, ...rest } = this.props;
    return <Route {...rest} render={this.renderRoute} />;
  }
}

const mapStateToProps = state => ({
  isLogedIn: state.login.isLogedIn
});

export default connect(mapStateToProps)(ValidateRoute);
