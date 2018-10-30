import React from 'react';
import PropTypes from 'prop-types';
import { infoUserPropType } from '@propTypes/propTypes';

import Form from './components/Form';
import styles from './styles.scss';

function Layout({ onSubmit, isLoaded, infoUser, hasError, isSuccessUpdate }) {
  return (
    <section className={styles.profile}>
      <article className={styles.containerForm}>
        {!isLoaded ? (
          <div>Loading...</div>
        ) : (
          <Form
            onSubmit={onSubmit}
            initialValues={infoUser}
            hasError={hasError}
            isSuccessUpdate={isSuccessUpdate}
          />
        )}
      </article>
    </section>
  );
}

Layout.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSuccessUpdate: PropTypes.bool.isRequired,
  infoUser: infoUserPropType,
  hasError: PropTypes.bool,
  isLoaded: PropTypes.bool
};

export default Layout;
