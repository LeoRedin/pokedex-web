import React from 'react'

import {Wrapper, PokeInfo} from './styles'

function Home() {
  const pokes = [{name: 'Bulbassaur'}, {name: 'Charmander'}, {name: 'Squirtle'}]

  return (
    <Wrapper>
      {pokes.map(poke => (
        <PokeInfo key={poke.name}> {poke.name}</PokeInfo>
      ))}
    </Wrapper>
  )
}

export {Home}
