import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '@components/Input';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.scss';

function Form({ handleSubmit, msgUpdate, hasError }) {
  return (
    <Fragment>
      <div className={styles.containerUserImg}>
        <FontAwesomeIcon className={styles.iconUser} icon={faUser} />
      </div>
      <form className={styles.formProfile} onSubmit={handleSubmit}>
        <Field component={CustomInput} type="text" placeholder="First Name" name="firstname" />
        <Field component={CustomInput} type="text" placeholder="Surname" name="surname" />
        <Field component={CustomInput} type="text" placeholder="Email" name="username" />
        <Field component={CustomInput} type="text" placeholder="Address" name="address" />
        <button className={styles.btnUpdate} type="submit">
          update
        </button>
      </form>
      {!hasError ? (
        <span className={styles.successUpdate}>{msgUpdate}</span>
      ) : (
        <span className={styles.failureUpdate}>{msgUpdate}</span>
      )}
    </Fragment>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  msgUpdate: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired
};

export default reduxForm({ form: 'editProfile' })(Form);
