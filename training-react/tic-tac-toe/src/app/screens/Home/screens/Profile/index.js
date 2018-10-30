import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionCreators from '@redux/profile/actions';
import { infoUserPropType } from '@propTypes/propTypes';
import PropTypes from 'prop-types';

import Layout from './layout';

class Profile extends Component {
  componentDidMount() {
    this.props.onGetUser();
  }

  componentWillUnmount() {
    this.props.onClearState();
  }

  render() {
    const { onUpdateUser, loading, infoUser, updateUserError, isSuccessUpdate } = this.props;
    return (
      <Layout
        onSubmit={onUpdateUser}
        loading={loading}
        infoUser={infoUser}
        hasError={updateUserError}
        isSuccessUpdate={isSuccessUpdate}
      />
    );
  }
}

Profile.propTypes = {
  onUpdateUser: PropTypes.func.isRequired,
  onGetUser: PropTypes.func.isRequired,
  onClearState: PropTypes.func.isRequired,
  isSuccessUpdate: PropTypes.bool.isRequired,
  infoUser: infoUserPropType,
  loading: PropTypes.bool.isRequired,
  updateUserError: PropTypes.bool
};

const mapStateToProps = ({ profile }) => ({
  infoUser: profile.infoUser,
  loading: profile.loading,
  updateUserError: profile.updateUserError,
  isSuccessUpdate: profile.isSuccessUpdate
});

const mapDispatchToProps = dispatch => ({
  onUpdateUser: params => dispatch(actionCreators.updateUser(params)),
  onGetUser: () => dispatch(actionCreators.getUser()),
  onClearState: () => dispatch(actionCreators.clearState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
