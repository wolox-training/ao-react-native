import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function Loader(WrappedComponent) {
  function Comp({ loading, ...props }) {
    return loading ? (
      <div className={style.containerLoader}>
        <div className={style.loader} />
      </div>
    ) : (
      <WrappedComponent {...props} />
    );
  }

  Comp.propTypes = {
    loading: PropTypes.bool
  };

  return Comp;
}

export default Loader;
