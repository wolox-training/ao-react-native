import { calculateWinner } from '@utils/utils';
import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '@redux/game/actions';
import PropTypes from 'prop-types';

import Game from './layout';

function GameContainer({ history, stepNumber, xIsNext, handleClick, jumpTo }) {
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
  return (
    <Game
      history={history}
      squares={current.squares}
      onClick={handleClick}
      status={status}
      jumpToStep={jumpTo}
    />
  );
}

const mapStateToProps = state => ({
  history: state.game.history,
  xIsNext: state.game.xIsNext,
  stepNumber: state.game.stepNumber
});

const mapDispatchToProps = dispatch => ({
  jumpTo: step => dispatch(actionCreators.jumpToStep(step)),
  handleClick: i => dispatch(actionCreators.clickSquare(i))
});

GameContainer.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
  ),
  xIsNext: PropTypes.bool.isRequired,
  stepNumber: PropTypes.number.isRequired,
  jumpTo: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
