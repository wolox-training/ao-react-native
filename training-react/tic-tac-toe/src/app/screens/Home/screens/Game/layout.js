import React from 'react';
import PropTypes from 'prop-types';

import Board from './components/Board';
import Moves from './components/Moves';
import style from './styles.scss';

function Game({ history, squares, onClick, status, jumpToStep }) {
  return (
    <div className={style.game}>
      <div className={style.board}>
        <Board squares={squares} onClick={onClick} />
      </div>
      <div className={style.gameInfo}>
        <div>{status}</div>
        {<Moves history={history} jump={jumpToStep} />}
      </div>
    </div>
  );
}

Game.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
  ),
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired,
  jumpToStep: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Game;
