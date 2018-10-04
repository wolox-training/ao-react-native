import * as gameConsts from '@consts/game';
import React, { Component } from 'react';

import Board from './components/Board/board';
import style from './styles.scss';
import Moves from './components/Moves/moves';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null), step: 'step0' }],
    xIsNext: true,
    stepNumber: 0
  };

  calculateWinner = squares => {
    for (let i = 0; i < gameConsts.lines.length; i += 1) {
      const [a, b, c] = gameConsts.lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const step = `step${this.state.stepNumber + 1}`;
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{ squares, step }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  };

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const status = winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    return (
      <div className={style.game}>
        <div>
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={style.gameInfo}>
          <div>{status}</div>
          {<Moves history={history} jump={this.jumpTo} />}
        </div>
      </div>
    );
  }
}

export default Game;
