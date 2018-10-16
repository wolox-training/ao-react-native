import { required, minLength, email } from '@validations';

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';
import customInput from '@components/Input';

import style from './styles.scss';

const Layout = ({ handleSubmit }) => (
  <section className={style.loginPage}>
    <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <img
          className={style.imgLogin}
          src="https://www.wolox.com.ar/assets/img-logo-wolox-color-93cbcc9f2c.svg"
          alt="Wolox Logo"
        />
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
        <button type="submit">login</button>
      </form>
    </div>
  </section>
);

Layout.propTypes = {
  handleSubmit: func.isRequired
};

const Form = reduxForm({
  form: 'login'
})(Layout);

export default Form;
