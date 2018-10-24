import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '@assets/images/img-wolox-logo.svg';
import ROUTES from '@consts/route';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.scss';

function Layout({ handleClick }) {
  return (
    <nav className={styles.header}>
      <div className={styles.menuHeader}>
        <Link className={styles.logo} to={ROUTES.GAME}>
          <img className={styles.imgLogo} src={logo} alt="Wolox Logo" />
        </Link>
        <div className={styles.containerLinks}>
          <Link className={styles.link} to={ROUTES.PROFILE}>
            PROFILE
          </Link>
        </div>
      </div>
      <div className={styles.optionsHeader}>
        <button className={styles.buttonSignOut} onClick={handleClick}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </nav>
  );
}

Layout.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Layout;
