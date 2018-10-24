import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Step from './components/Step';

class Moves extends Component {
  renderMoves = (step, move) => {
    const { jump } = this.props;
    return <Step key={step.step} onClick={jump} move={move} />;
  };

  render() {
    const { history } = this.props;
    return <ul>{history.map(this.renderMoves)}</ul>;
  }
}

Moves.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  jump: PropTypes.func.isRequired
};

export default Moves;
