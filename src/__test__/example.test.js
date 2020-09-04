/* eslint-disable testing-library/prefer-explicit-assert */
/* eslint-disable testing-library/no-debug */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import {render} from '@testing-library/react'
import {Geracoes} from 'components'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from '../redux/rootReducer'
import store from '../redux/store'

test('renderizar um form com title, content, tags, submit', () => {
  const testStore = createStore(rootReducer, {generations: {generation: 4}})
  const {debug} = render(
    <Provider store={testStore}>
      <Geracoes />
    </Provider>,
  )
  debug()
})
