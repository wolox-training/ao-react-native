import React from 'react';
import { string, func, arrayOf, shape } from 'prop-types';

import Board from './components/Board';
import Moves from './components/Moves';
import style from './styles.scss';

function Game({ history, squares, onClick, status, jumpToStep }) {
  return (
    <div className={style.game}>
      <div>
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
  history: arrayOf(
    shape({
      squares: arrayOf(string)
    }).isRequired
  ),
  squares: arrayOf(string).isRequired,
  status: string.isRequired,
  jumpToStep: func.isRequired,
  onClick: func.isRequired
};

export default Game;
