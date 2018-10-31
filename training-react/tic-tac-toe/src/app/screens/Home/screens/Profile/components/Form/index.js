import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '@components/Input';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import formNames from '@consts/formNames';

import styles from './styles.scss';

function Form({ handleSubmit, hasError, isSuccessUpdate }) {
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
      {isSuccessUpdate ? (
        <span className={styles.successUpdate}>Success update user data</span>
      ) : (
        hasError && <span className={styles.failureUpdate}>Error in update user data</span>
      )}
    </Fragment>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSuccessUpdate: PropTypes.bool.isRequired,
  hasError: PropTypes.bool
};

export default reduxForm({ form: formNames.editProfile })(Form);
