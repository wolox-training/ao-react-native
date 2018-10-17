import React from 'react';
import { string } from 'prop-types';

import style from './styles.scss';

const getValidityClassName = meta => {
  if (meta.active) {
    return;
  }
  if (meta.touched && meta.invalid) {
    return style.invalid;
  }
  if (meta.touched && meta.valid) {
    return style.valid;
  }
};

function CustomInput({ input, meta, type, placeholder }) {
  return (
    <div className={`${style.customInputContainer} ${getValidityClassName(meta)}`}>
      <input {...input} type={type} className={style.customInput} placeholder={placeholder} />
      {meta.error && meta.touched && !meta.active && <div className={style.errorText}>{meta.error}</div>}
    </div>
  );
}

CustomInput.propTypes = {
  type: string.isRequired,
  placeholder: string
};

export default CustomInput;
