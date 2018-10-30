import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import CustomInput from '@components/Input';
import formNames from '@consts/formNames';

import { required, minLength, email } from '@validations';

import logo from '@assets/images/img-wolox-logo.svg';

import style from './styles.scss';

function Layout({ handleSubmit, hasError }) {
  return (
    <section className={style.loginPage}>
      <div className={style.containerForm}>
        <form className={style.formLogin} onSubmit={handleSubmit}>
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
          {hasError && <div className={style.messageError}>{hasError}</div>}
        </form>
      </div>
    </section>
  );
}

Layout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  hasError: PropTypes.string
};

export default reduxForm({ form: formNames.login })(Layout);
