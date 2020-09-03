import {combineReducers} from 'redux'

import {authReducer} from './auth'
import {generationsReducer} from './generations'

const rootReducer = combineReducers({
  auth: authReducer,
  generations: generationsReducer
})

export default rootReducer
