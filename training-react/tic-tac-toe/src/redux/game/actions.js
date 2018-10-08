import { actionsTypes, calculateWinner } from '@consts/game';

const jumpToStep = step => ({
  type: actionsTypes.jumpToStep,
  step
});

const clickSquare = i => (dispatch, getState) => {
  const history = getState().game.history.slice(0, getState().game.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  const step = `step${getState().game.stepNumber + 1}`;
  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  squares[i] = getState().game.xIsNext ? 'X' : 'O';
  const xIsNext = !getState().game.xIsNext;
  dispatch({
    type: actionsTypes.clickSquare,
    payload: {
      history: history.concat([{ squares, step }]),
      stepNumber: history.length,
      xIsNext
    }
  });
};

export { jumpToStep, clickSquare };
