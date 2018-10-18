import React, { Component, Fragment } from 'react';
import { arrayOf, string, func } from 'prop-types';

import Square from './components/Square';
import style from './styles.scss';

class Board extends Component {
  renderSquare = i => {
    const { squares, onClick } = this.props;
    return <Square value={squares[i]} position={i} onClick={onClick} />;
  };

  render() {
    return (
      <Fragment>
        <div className={style.lineSquares}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={style.lineSquares}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={style.lineSquares}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </Fragment>
    );
  }
}

Board.propTypes = {
  squares: arrayOf(string).isRequired,
  onClick: func.isRequired
};

export default Board;
