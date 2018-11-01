import { createReducer } from 'redux-recompose';

import { actionsTypes } from './actions';

const initialState = {
  history: [{ squares: Array(9).fill(null), step: 'step0' }],
  xIsNext: true,
  stepNumber: 0
};

const reducerEffects = {
  onJump: (state, action) => ({
    ...state,
    stepNumber: action.payload,
    xIsNext: action.payload % 2 === 0
  }),
  onClickSquare: (state, action) => ({
    ...state,
    ...action.payload
  })
};

const reducerDescription = {
  [actionsTypes.JUMP_TO_STEP]: reducerEffects.onJump,
  [actionsTypes.CLICK_SQUARE]: reducerEffects.onClickSquare
};

export default createReducer(initialState, reducerDescription);
