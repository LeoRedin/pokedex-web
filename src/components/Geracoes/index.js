import React from 'react'

import {useSelector, useDispatch} from 'react-redux'

function Geracoes() {
  const generation = useSelector(store => store.generations.generation)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch({type: 'increment'})}>Geração anterior</button>
      {`Geração atual: ${generation}`}
      <button onClick={() => dispatch({type: 'decrement'})}>Próxima Geração </button>
    </div>
  )
}

export {Geracoes}
