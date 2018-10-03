import React, { Component } from 'react';
import { arrayOf, func, shape } from 'prop-types';

import Step from './components/Step/step';

class Moves extends Component {
  renderMoves = (step, move) => {
    const { jump } = this.props;
    return <Step onClick={jump} move={move} />;
  };

  render() {
    const { history } = this.props;
    return <ul>{history.map(this.renderMoves)}</ul>;
  }
}

Moves.propTypes = {
  history: arrayOf(shape),
  jump: func.isRequired
};

export default Moves;
