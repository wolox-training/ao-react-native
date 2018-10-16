import { calculateWinner } from '@utils/utils';

export const actionsTypes = {
  JUMP_TO_STEP: 'JUMP_TO_STEP',
  CLICK_TO_SQUARE: 'CLICK_TO_SQUARE'
};

const actionCreators = {
  jumpToStep: step => ({
    type: actionsTypes.JUMP_TO_STEP,
    step
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
      type: actionsTypes.CLICK_TO_SQUARE,
      payload: {
        history: currentHistory.concat([{ squares, step }]),
        stepNumber: currentHistory.length,
        xIsNext: !xIsNext
      }
    });
  }
};

export default actionCreators;
