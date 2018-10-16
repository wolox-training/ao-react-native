import React from 'react';
import cx from 'classnames';

import style from './styles.scss';

const getValidityClassName = meta => {
  if (meta.asyncValidating) {
    return style.asyncValidating;
  }

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

export const customInput = props => {
  const { input, type, meta, placeholder } = props;
  return (
    <div className={cx(style.customInputContainer, { dirty: meta.dirty }, getValidityClassName(meta))}>
      <input {...input} type={type} className={style.customInput} placeholder={placeholder} />
      {meta.error && meta.touched && !meta.active && <div className={style.errorText}>{meta.error}</div>}
    </div>
  );
};
