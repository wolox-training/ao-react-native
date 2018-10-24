import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Step extends PureComponent {
  handleClick = () => {
    const { onClick, move } = this.props;
    onClick(move);
  };

  render() {
    const { move } = this.props;
    return (
      <li>
        <button onClick={this.handleClick}>{move ? `Go to move #${move}` : 'Go to game start'}</button>
      </li>
    );
  }
}

Step.propTypes = {
  onClick: PropTypes.func.isRequired,
  move: PropTypes.number.isRequired
};

export default Step;
