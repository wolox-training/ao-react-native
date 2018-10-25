import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionCreators from '@redux/profile/actions';
import PropTypes from 'prop-types';

import Layout from './layout';

class Profile extends Component {
  componentDidMount() {
    const { getUser } = this.props;
    const idUser = localStorage.getItem('userId');
    getUser(idUser);
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
  infoUser: PropTypes.shape({
    firstname: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string
  }),
  loaded: PropTypes.bool.isRequired,
  msgUpdate: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  infoUser: state.profile.info,
  loaded: state.profile.loaded,
  msgUpdate: state.profile.msgUpdate,
  hasError: state.profile.hasError
});

const mapDispatchToProps = dispatch => ({
  updateUser: params => dispatch(actionCreators.updateUser(params)),
  getUser: id => dispatch(actionCreators.getUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
