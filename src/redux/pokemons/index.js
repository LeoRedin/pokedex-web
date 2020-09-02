const INITIAL_STATE = {
  pokemons: [],
}

const pokemonsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
      }
    default:
      return {
        ...INITIAL_STATE,
      }
  }
}

export {pokemonsReducer}
