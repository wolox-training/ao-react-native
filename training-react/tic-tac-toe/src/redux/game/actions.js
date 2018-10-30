import { createTypes } from 'redux-recompose';
import { calculateWinner } from '@utils/utils';

export const actionsTypes = createTypes(['JUMP_TO_STEP', 'CLICK_SQUARE'], '@@TIC_TAC_TOE');

const target = {
  GAME: 'game'
};

const actionCreators = {
  jumpToStep: step => ({
    type: actionsTypes.JUMP_TO_STEP,
    target: target.GAME,
    payload: step
  }),
  clickSquare: i => (dispatch, getState) => {
    const { stepNumber, history, xIsNext } = getState().game;
    const currentHistory = history.slice(0, stepNumber + 1);
    const current = currentHistory[currentHistory.length - 1];
    const squares = current.squares.slice();
    const step = `step${stepNumber + 1}`;

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';

    dispatch({
      type: actionsTypes.CLICK_SQUARE,
      target: target.GAME,
      payload: {
        history: currentHistory.concat([{ squares, step }]),
        stepNumber: currentHistory.length,
        xIsNext: !xIsNext
      }
    });
  }
};

export default actionCreators;
