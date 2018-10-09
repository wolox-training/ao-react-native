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
    const currentState = getState().game.stepNumber;
    const history = getState().game.history.slice(0, currentState + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const step = `step${currentState + 1}`;
    const xIsNext = getState().game.xIsNext;

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';

    dispatch({
      type: actionsTypes.clickSquare,
      payload: {
        history: history.concat([{ squares, step }]),
        stepNumber: history.length,
        xIsNext: !xIsNext
      }
    });
  }
};

export default actionCreators;
