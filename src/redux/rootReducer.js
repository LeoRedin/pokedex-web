import {combineReducers} from 'redux'

import {authReducer} from './auth'
import {pokemonsReducer} from './pokemons'

const rootReducer = combineReducers({
  auth: authReducer,
  pokemons: pokemonsReducer,
})

export default rootReducer
