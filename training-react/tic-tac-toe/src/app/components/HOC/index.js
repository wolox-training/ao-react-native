import React, { Component } from 'react';

import style from './styles.scss';

function HigherOrderComponent(WrappedComponent) {
  class HOC extends Component {
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
  return HOC;
}

export default HigherOrderComponent;
