import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '@assets/images/img-wolox-logo.svg';
import ROUTES from '@consts/route';
import ActionCreators from '@redux/login/actions';

import styles from './styles.scss';

function Header({ signOutUser }) {
  return (
    <header className={styles.header}>
      <div className={styles.menuHeader}>
        <div className={styles.logo}>
          <Link to={ROUTES.GAME}>
            <img className={styles.imgLogo} src={logo} alt="Wolox Logo" />
          </Link>
        </div>
        <nav className={styles.navBar}>
          <Link className={styles.link} to={ROUTES.PROFILE}>
            PROFILE
          </Link>
        </nav>
      </div>
      <div className={styles.optionsHeader}>
        <button className={styles.buttonSignOut} onClick={signOutUser}>
          <i className="fas fa-sign-out-alt" />
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  signOutUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(ActionCreators.signOutUser())
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
