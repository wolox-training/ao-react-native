import { calculateWinner } from '@utils/utils';
import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '@redux/game/actions';
import { string, func, arrayOf, shape, number, bool } from 'prop-types';

import Board from './components/Board';
import style from './styles.scss';
import Moves from './components/Moves';

const Game = ({ history, stepNumber, xIsNext, handleClick, jumpTo }) => {
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
  return (
    <div className={style.game}>
      <div>
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className={style.gameInfo}>
        <div>{status}</div>
        {<Moves history={history} jump={jumpTo} />}
      </div>
    </div>
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

Game.propTypes = {
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
)(Game);
