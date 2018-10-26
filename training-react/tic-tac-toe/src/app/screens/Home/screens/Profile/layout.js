import React from 'react';
import PropTypes from 'prop-types';
import { infoUserConst } from '@consts/propTypes';

import Form from './components/Form';
import styles from './styles.scss';

function Layout({ onSubmit, infoUser, loaded, msgUpdate, hasError }) {
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
  msgUpdate: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  infoUser: infoUserConst
};

export default Layout;
