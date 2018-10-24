import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Field, reduxForm } from 'redux-form';
// import PropTypes from 'prop-types';
import CustomInput from '@components/Input';

import styles from './styles.scss';

function Layout() {
  return (
    <section className={styles.profile}>
      <article className={styles.containerForm}>
        <div className={styles.containerUserImg}>
          <FontAwesomeIcon className={styles.iconCard} icon={faUser} />
        </div>
        <form className={styles.formProfile}>
          <Field component={CustomInput} type="text" placeholder="Nombre" name="name" />
        </form>
      </article>
    </section>
  );
}

export default reduxForm({ form: 'editProfile' })(Layout);
