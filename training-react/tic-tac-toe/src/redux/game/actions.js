import { calculateWinner } from '@utils/utils';

export const actionsTypes = {
  jumpToStep: 'JUMP_TO_STEP',
  clickSquare: 'CLICK_TO_SQUARE'
};

const actionCreators = {
  jumpToStep: step => ({
    type: actionsTypes.jumpToStep,
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
      type: actionsTypes.clickSquare,
      payload: {
        history: currentHistory.concat([{ squares, step }]),
        stepNumber: currentHistory.length,
        xIsNext: !xIsNext
      }
    });
  }
};

export default actionCreators;
