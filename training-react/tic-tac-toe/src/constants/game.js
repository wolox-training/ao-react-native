const linesConsts = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

export const actionsTypes = {
  jumpToStep: 'JUMP_TO_STEP',
  clickSquare: 'CLICK_TO_SQUARE'
};

export const calculateWinner = squares => {
  for (let i = 0; i < linesConsts.length; i += 1) {
    const [a, b, c] = linesConsts[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
