import React from 'react'

import {getInitialPokemons, api} from 'services/api'
import {PokemonCard} from 'components/PokemonCard'
import {Icon} from 'components/Icon'
import {Spinner} from 'components/Spinner'
import {icons} from 'utils/icons'
import {Wrapper, Input, InputContent} from './styles'

function Pokemons() {
  const [pokemons, setPokemons] = React.useState()
  const [backupPokemons, setBackupPokemons] = React.useState()
  const [loading, setLoading] = React.useState(true)
  const [pokeName, setPokeName] = React.useState('')

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
          setBackupPokemons(updatedPokemons)
          setLoading(false)
        })
      }
    }

    getPokes()
  }, [])

  React.useEffect(() => {
    if (backupPokemons) {
      const oldPokemons = [...backupPokemons]
      const filteredPokemons = oldPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(pokeName.toLowerCase())
          ? pokemon
          : null,
      )
      setPokemons(filteredPokemons)
    }
  }, [backupPokemons, pokeName])

  if (loading) return <Spinner />

  return (
    <Wrapper>
      <InputContent>
        <Icon name={icons.SEARCH} size="1x" />
        <Input
          placeholder="Deoxys"
          value={pokeName}
          onChange={e => setPokeName(e.target.value)}
        />
      </InputContent>
      <br />
      <br />
      {pokemons.map(pokemon => (
        <PokemonCard key={`${pokemon.name}-${pokemon.id}`} {...pokemon} />
      ))}
    </Wrapper>
  )
}

export {Pokemons}
