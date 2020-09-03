const INITIAL_STATE = {
  generation: []
}

const generationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        generation: state.generation + 1
      }
    case 'decrement':
      return {
        ...state,
        generation: state.generation - 1
      }
    default:
      return {
        ...INITIAL_STATE,
      }
  }
}

export {generationsReducer}
