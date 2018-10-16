import { required, minLength } from '@validations';

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

import styles from './styles.scss';

class Login extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <section className={styles.loginPage}>
        <div className={styles.form}>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div>
              <Field
                component="input"
                type="text"
                placeholder="usuario"
                name="username"
                validate={[required]}
              />
            </div>
            <div>
              <Field
                component="input"
                type="password"
                placeholder="contrase&ntilde;a"
                name="password"
                validate={[required, minLength]}
              />
            </div>
            <button type="submit">login</button>
          </form>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  handleSubmit: func.isRequired
};

const Form = reduxForm({
  form: 'register'
})(Login);

export default Form;
