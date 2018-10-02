import React, { Component } from 'react';

import Board from './components/Board';
import styles from './styles.scss';

class Game extends Component {
  render() {
    return (
      <div className={styles.Game}>
        <div className="game-board">
          <Board />
        </div>
        <div className={styles.GameInfo}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
