import React from 'react'

const GenerationStateContext = React.createContext()
const GenerationDispatchContext = React.createContext()

function generationReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {generation: state.generation + 1}
    case 'decrement':
      return {generation: state.generation - 1}
    default:
      return state
  }
}

function GenerationProvider({children}) {
  const [state, dispatch] = React.useReducer(generationReducer, {generation: 1})
  return (
    <GenerationStateContext.Provider value={state}>
      <GenerationDispatchContext.Provider value={dispatch}>
        {children}
      </GenerationDispatchContext.Provider>
    </GenerationStateContext.Provider>
  )
}

function useGenerationState() {
  const context = React.useContext(GenerationStateContext)
  if (context === undefined) {
    throw new Error(
      'useGenerationState só pode ser usado dentro do GenerationProvider',
    )
  }
  return context
}

function useGenerationDispatch() {
  const context = React.useContext(GenerationDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useGenerationDispatch só pode ser usado dentro do GenerationProvider',
    )
  }
  return context
}

export {GenerationProvider, useGenerationState, useGenerationDispatch}
