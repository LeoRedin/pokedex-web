import React from 'react'

import {getAllPokemons} from 'services/api'

import {Wrapper, PokeInfo} from './styles'

function Home() {
  const [pokemons, setPokemons] = React.useState('')

  const pokes = [
    {number: '001', name: 'Bulbassaur', types: ['grass', 'poison']},
    {number: '004', name: 'Charmander', types: ['fire']},
    {number: '007', name: 'Squirtle', types: ['water']},
  ]

  React.useEffect(() => {
    async function getPokes() {
      const pokeData = await getAllPokemons()

      if (pokeData.success) setPokemons(pokeData.pokemons)
    }

    getPokes()
  }, [])

  // eslint-disable-next-line no-console
  console.log('state', pokemons)

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
