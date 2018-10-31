import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function Loader(WrappedComponent) {
  class Comp extends Component {
    render() {
      const { loading, ...props } = this.props;
      return loading ? (
        <div className={style.containerLoader}>
          <div className={style.loader} />
        </div>
      ) : (
        <WrappedComponent {...props} />
      );
    }
  }

  Comp.propTypes = {
    loading: PropTypes.bool.isRequired
  };

  return Comp;
}

export default Loader;
