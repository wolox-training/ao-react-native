import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired
};

export default Square;
