import React, { PureComponent } from 'react';
import { string, func, number } from 'prop-types';

import styles from './styles.scss';

class Square extends PureComponent {
  handleClick = () => {
    const { position, onClick } = this.props;
    onClick(position);
  };

  render() {
    const { value } = this.props;
    return (
      <button className={styles.square} onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

Square.propTypes = {
  value: string,
  onClick: func.isRequired,
  position: number.isRequired
};

export default Square;
