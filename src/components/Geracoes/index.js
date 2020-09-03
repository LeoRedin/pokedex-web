import React from 'react'

import {
  GenerationProvider,
  useGenerationState,
  useGenerationDispatch,
} from 'contexts/generationContext'

function WhichGeneration() {
  const {generation} = useGenerationState()
  return <div> {`Mostrando geração ${generation}`} </div>
}

function ChangeGeneration() {
  const dispatch = useGenerationDispatch()
  return (
    <div>
      <button onClick={() => dispatch({type: 'decrement'})}>
        Geração anterior
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>
        Próxima geração
      </button>
    </div>
  )
}

function Geracoes() {
  return (
    <GenerationProvider>
      <WhichGeneration />
      <ChangeGeneration />
    </GenerationProvider>
  )
}

export {Geracoes}
