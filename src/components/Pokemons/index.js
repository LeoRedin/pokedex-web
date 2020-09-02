import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getInitialPokemons, api} from 'services/api'
import {PokemonCard} from 'components/PokemonCard'
import {Spinner} from 'components/Spinner'

import {Wrapper} from './styles'

function Pokemons() {
  const [loading, setLoading] = React.useState(false)

  const dispatch = useDispatch()
  const pokemonsList = useSelector(store => store.pokemons.pokemons)
  // eslint-disable-next-line no-console

  React.useEffect(() => {
    async function getPokes() {
      setLoading(true)
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
          dispatch({type: 'SET_POKEMONS', payload: updatedPokemons})
          //setPokemons(updatedPokemons)
          setLoading(false)
        })
      }
    }

    if (pokemonsList.length <= 0) {
      getPokes()
    } else setLoading(false)
  }, [dispatch, pokemonsList.length])

  // eslint-disable-next-line no-console
  // console.log('pokes', pokemons)

  if (loading) return <Spinner />

  return (
    <Wrapper>
      {pokemonsList.map(pokemon => (
        <PokemonCard key={`${pokemon.name}-${pokemon.id}`} {...pokemon} />
      ))}
    </Wrapper>
  )
}

export {Pokemons}
