import React from 'react';
import { string } from 'prop-types';

import style from './styles.scss';

const getValidityClassName = meta => {
  if (meta.active) {
    return;
  }
  return meta.error && meta.touched ? style.invalid : '';
};

function CustomInput({ input, meta, type, placeholder }) {
  return (
    <div
      className={`
      ${style.customInputContainer} 
      ${meta.touched && meta.valid ? style.valid : ''}
      ${getValidityClassName(meta)}`}
    >
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
