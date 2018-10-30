import React from 'react';
import PropTypes from 'prop-types';
import { infoUserPropType } from '@propTypes/propTypes';

import Form from './components/Form';
import styles from './styles.scss';

function Layout({ onSubmit, isLoaded, infoUser, msgUpdate, hasError }) {
  return (
    <section className={styles.profile}>
      <article className={styles.containerForm}>
        {!isLoaded ? (
          <div>Loading...</div>
        ) : (
          <Form onSubmit={onSubmit} initialValues={infoUser} msgUpdate={msgUpdate} hasError={hasError} />
        )}
      </article>
    </section>
  );
}

Layout.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  infoUser: infoUserPropType,
  msgUpdate: PropTypes.string,
  hasError: PropTypes.bool,
  isLoaded: PropTypes.bool
};

export default Layout;
