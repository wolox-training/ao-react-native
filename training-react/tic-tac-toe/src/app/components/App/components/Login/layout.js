import imglogin from '@assets/images/img-01.png';

import { required, minLength } from '@validations';

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

import { customInput } from '../Fields';

import styles from './styles.scss';

class Login extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <section className={styles.limiter}>
        <article className={styles.containerLogin}>
          <div className={styles.wrapLogin}>
            <div className={styles.loginPic}>
              <img src={imglogin} alt="img-login" />
            </div>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
              <span className={styles.loginFormTitle}>Login</span>
              <Field name="email" component={customInput} type="text" label="Email" validate={[required]} />
              <Field
                name="password"
                component={customInput}
                type="password"
                label="Contrase&ntilde;a"
                validate={[required, minLength]}
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </article>
      </section>
    );
  }
}

Login.propTypes = {
  handleSubmit: func.isRequired
};

const LoginForm = reduxForm({
  form: 'register'
})(Login);

export default LoginForm;
