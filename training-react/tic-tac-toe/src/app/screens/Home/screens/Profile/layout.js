import React from 'react';
import PropTypes from 'prop-types';

import Form from './components/Form';
import styles from './styles.scss';

function Layout({ onSubmit, loaded, infoUser, msgUpdate, hasError }) {
  return (
    <section className={styles.profile}>
      <article className={styles.containerForm}>
        {loaded && (
          <Form onSubmit={onSubmit} initialValues={infoUser} msgUpdate={msgUpdate} hasError={hasError} />
        )}
      </article>
    </section>
  );
}

Layout.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  infoUser: PropTypes.shape({
    firstname: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string
  }).isRequired,
  msgUpdate: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired
};

export default Layout;
