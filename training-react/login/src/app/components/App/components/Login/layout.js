import { required, minLength } from '@validations';

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

import { customInput } from '../Fields';

class Login extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
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
