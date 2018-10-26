import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionCreators from '@redux/profile/actions';
import { infoUserConst } from '@consts/propTypes';
import PropTypes from 'prop-types';

import Layout from './layout';

class Profile extends Component {
  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

  componentWillUnmount() {
    this.props.clearState();
  }

  render() {
    const { updateUser, infoUser, loaded, msgUpdate, hasError } = this.props;
    return (
      <Layout
        onSubmit={updateUser}
        infoUser={infoUser}
        loaded={loaded}
        msgUpdate={msgUpdate}
        hasError={hasError}
      />
    );
  }
}

Profile.propTypes = {
  updateUser: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  clearState: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  msgUpdate: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  infoUser: infoUserConst
};

const mapStateToProps = ({ profile }) => ({
  infoUser: profile.info,
  loaded: profile.loaded,
  msgUpdate: profile.msgUpdate,
  hasError: profile.hasError
});

const mapDispatchToProps = dispatch => ({
  updateUser: params => dispatch(actionCreators.updateUser(params)),
  getUser: id => dispatch(actionCreators.getUser(id)),
  clearState: () => dispatch(actionCreators.clearState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
