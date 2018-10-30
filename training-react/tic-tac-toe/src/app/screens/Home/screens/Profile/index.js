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
    const { onUpdateUser, isLoadedProfile, infoUser, updateUser, updateUserError } = this.props;
    return (
      <Layout
        onSubmit={onUpdateUser}
        isLoaded={isLoadedProfile}
        infoUser={infoUser}
        msgUpdate={updateUser}
        hasError={updateUserError}
      />
    );
  }
}

Profile.propTypes = {
  onUpdateUser: PropTypes.func.isRequired,
  onGetUser: PropTypes.func.isRequired,
  onClearState: PropTypes.func.isRequired,
  infoUser: infoUserPropType,
  isLoadedProfile: PropTypes.bool,
  updateUser: PropTypes.string,
  updateUserError: PropTypes.bool
};

const mapStateToProps = ({ profile }) => ({
  infoUser: profile.infoUser,
  isLoadedProfile: profile.isLoadedProfile,
  updateUser: profile.updateUser,
  updateUserError: profile.updateUserError
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
