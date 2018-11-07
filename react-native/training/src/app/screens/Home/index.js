import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Routes from '../../../constants/routes';
import { actionCreators as authActions } from '../../../redux/auth/actions';

import Home from './layout';

class HomeContainer extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(authActions.logout());
  };

  navigateToBooks = () => {
    const { navigation } = this.props;
    navigation.navigate({ routeName: Routes.BookList });
  };

  render() {
    return <Home onLogout={this.handleLogout} navigateToBooks={this.navigateToBooks} />;
  }
}

HomeContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

export default connect()(HomeContainer);
