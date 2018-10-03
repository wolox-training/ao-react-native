import React, { PureComponent } from 'react';
import { func, number } from 'prop-types';

class Step extends PureComponent {
  handleClick = () => {
    const { onClick, move } = this.props;
    onClick(move);
  };

  render() {
    const { move } = this.props;
    return (
      <li key={move}>
        <button onClick={this.handleClick}>{move ? `Go to move #${move}` : 'Go to game start'}</button>
      </li>
    );
  }
}

Step.propTypes = {
  onClick: func.isRequired,
  move: number.isRequired
};

export default Step;
