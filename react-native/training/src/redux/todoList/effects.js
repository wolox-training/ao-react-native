const reducerEffects = {
  addItem: (state, action) => ({
    ...state,
    [action.target]: [
      {
        id: `${state.items.length} ${action.payload}`,
        label: action.payload,
        completed: false
      },
      ...state.items
    ]
  }),
  removeItem: (state, action) => ({
    ...state,
    [action.target]: state.items.filter((item, i) => i !== action.payload)
  }),
  toggleItemCompleted: (state, action) => ({
    ...state,
    [action.target]: state.items.map((item, i) => {
      if (i === action.payload) {
        return {
          id: item.id,
          label: item.label,
          completed: !item.completed
        };
      }
      return item;
    })
  }),
  removeCompleted: (state, action) => ({
    ...state,
    [action.target]: state.items.filter(item => !item.completed)
  })
};

export default reducerEffects;
