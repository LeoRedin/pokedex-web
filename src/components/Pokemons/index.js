import React from 'react'

import {getInitialPokemons, api} from 'services/api'
import {PokemonCard} from 'components/PokemonCard'
import {Spinner} from 'components/Spinner'

import {Wrapper} from './styles'

function Pokemons() {
  const [pokemons, setPokemons] = React.useState()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function getPokes() {
      const pokeData = await getInitialPokemons()

      if (pokeData.success) {
        const promises = []

        pokeData.pokemons.map(pokemon => promises.push(api.get(pokemon.url)))

        Promise.allSettled(promises).then(results => {
          const updatedPokemons = []
          results.map(result => {
            if (result.status === 'fulfilled') {
              const uniquePoke = {
                id: result.value.data.id,
                name: result.value.data.name,
                types: result.value.data.types,
                image:
                  result.value.data.sprites.other['official-artwork']
                    .front_default,
              }
              updatedPokemons.push(uniquePoke)
            }
          })
          setPokemons(updatedPokemons)
          setLoading(false)
        })
      }
    }

    getPokes()
  }, [])

  // eslint-disable-next-line no-console
  // console.log('pokes', pokemons)

  if (loading) return <Spinner />

  return (
    <Wrapper>
      {pokemons.map(pokemon => (
        <PokemonCard key={`${pokemon.name}-${pokemon.id}`} {...pokemon} />
      ))}
    </Wrapper>
  )
}

export {Pokemons}
