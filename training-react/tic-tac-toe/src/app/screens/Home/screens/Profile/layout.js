import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import CustomInput from '@components/Input';

import styles from './styles.scss';

function Layout({ handleSubmit }) {
  return (
    <section className={styles.profile}>
      <article className={styles.containerForm}>
        <div className={styles.containerUserImg}>
          <FontAwesomeIcon className={styles.iconUser} icon={faUser} />
        </div>
        <form className={styles.formProfile} onSubmit={handleSubmit}>
          <Field
            className={styles.prueba}
            component={CustomInput}
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          <Field
            className={styles.prueba}
            component={CustomInput}
            type="text"
            placeholder="Surname"
            name="surname"
          />
          <Field
            className={styles.prueba}
            component={CustomInput}
            type="text"
            placeholder="Email"
            name="email"
          />
          <Field
            className={styles.prueba}
            component={CustomInput}
            type="password"
            placeholder="Password"
            name="password"
          />
          <button className={styles.btnLogin} type="submit">
            update
          </button>
        </form>
      </article>
    </section>
  );
}

Layout.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({ form: 'editProfile' })(Layout);
