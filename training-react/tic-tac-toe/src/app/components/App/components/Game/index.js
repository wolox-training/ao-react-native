import { calculateWinner } from '@utils/utils';
import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '@redux/game/actions';
import { string, func, arrayOf, shape, number, bool } from 'prop-types';

import Game from './layout';

const GameContainer = ({ history, stepNumber, xIsNext, handleClick, jumpTo }) => {
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
};

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
  history: arrayOf(
    shape({
      squares: arrayOf(string)
    }).isRequired
  ),
  xIsNext: bool.isRequired,
  stepNumber: number.isRequired,
  jumpTo: func.isRequired,
  handleClick: func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
