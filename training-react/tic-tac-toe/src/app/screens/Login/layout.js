import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func, bool, string } from 'prop-types';
import CustomInput from '@components/Input';

import { required, minLength, email } from '@validations';

import logo from '@assets/images/img-wolox-logo.svg';

import style from './styles.scss';

function Layout({ handleSubmit, hasError, msgError }) {
  return (
    <section className={style.loginPage}>
      <div className={style.form}>
        <form onSubmit={handleSubmit}>
          <img className={style.imgLogin} src={logo} alt="Wolox Logo" />
          <Field
            component={CustomInput}
            type="text"
            placeholder="email"
            name="email"
            validate={[required, email]}
          />

          <Field
            component={CustomInput}
            type="password"
            placeholder="password"
            name="password"
            validate={[required, minLength]}
          />
          <button className={style.btnLogin} type="submit">
            login
          </button>
          {hasError && <div className={style.messageError}>{msgError}</div>}
        </form>
      </div>
    </section>
  );
}

Layout.propTypes = {
  handleSubmit: func.isRequired,
  hasError: bool.isRequired,
  msgError: string.isRequired
};

export default reduxForm({ form: 'login' })(Layout);
