import React from 'react'

import {Wrapper, PokeInfo} from './styles'

function Home() {
  const pokes = [
    {number: '001', name: 'Bulbassaur', types: ['grass', 'poison']},
    {number: '004', name: 'Charmander', types: ['fire']},
    {number: '007', name: 'Squirtle', types: ['water']},
  ]

  return (
    <Wrapper>
      {pokes.map(poke => (
        <PokeInfo key={poke.name}>
          #{poke.number}
          <br />
          {poke.name}
          <br />
          {poke.types.map(type => (
            <>
              <span key={type}>{type}</span> {''}
            </>
          ))}
          <br />
          imagem alinhada à direita
        </PokeInfo>
      ))}
    </Wrapper>
  )
}

export {Home}
