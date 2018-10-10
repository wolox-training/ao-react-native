import { actionsTypes } from './actions';

const initialState = {
  history: [{ squares: Array(9).fill(null), step: 'step0' }],
  xIsNext: true,
  stepNumber: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.jumpToStep:
      return {
        ...state,
        stepNumber: action.step,
        xIsNext: action.step % 2 === 0
      };
    case actionsTypes.clickSquare:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
