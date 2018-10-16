import { required, minLength, email } from '@validations';

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';
import customInput from '@components/Input';
import logo from '@assets/images/img-wolox-logo.svg';

import style from './styles.scss';

function Layout({ handleSubmit }) {
  return (
    <section className={style.loginPage}>
      <div className={style.form}>
        <form onSubmit={handleSubmit}>
          <img className={style.imgLogin} src={logo} alt="Wolox Logo" />
          <Field
            component={customInput}
            type="text"
            placeholder="email"
            name="email"
            validate={[required, email]}
          />

          <Field
            component={customInput}
            type="password"
            placeholder="password"
            name="password"
            validate={[required, minLength]}
          />
          <button className={style.btnLogin} type="submit">
            login
          </button>
        </form>
      </div>
    </section>
  );
}

Layout.propTypes = {
  handleSubmit: func.isRequired
};

export default reduxForm({ form: 'login' })(Layout);
