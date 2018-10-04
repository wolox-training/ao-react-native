import React, { Component } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';

import Step from './components/Step/step';

class Moves extends Component {
  renderMoves = (step, move) => {
    const { jump } = this.props;
    return <Step key={move} onClick={jump} move={move} />;
  };

  render() {
    const { history } = this.props;
    return <ul>{history.map(this.renderMoves)}</ul>;
  }
}

Moves.propTypes = {
  history: arrayOf(
    shape({
      squares: arrayOf(string)
    })
  ).isRequired,
  jump: func.isRequired
};

export default Moves;
