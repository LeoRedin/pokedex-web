import React from 'react'

import {useParams} from 'react-router-dom'

import {Spinner} from 'components/Spinner'
import {getPokemonById} from 'services/api'

function Pokemon({history}) {
  const [loading, setLoading] = React.useState(true)
  const [pokemon, setPokemon] = React.useState()
  const [error, setError] = React.useState(false)

  const {id, name} = useParams()

  React.useEffect(() => {
    async function fetchPokemon() {
      const pokeData = await getPokemonById(id || name)
      console.log(pokeData)
      if (pokeData.success) {
        setPokemon(pokeData.pokemon)
      } else {
        history.push('/404')
      }
    }

    fetchPokemon()
  }, [history, id, name])

  if (loading) return <Spinner />

  return <div>Pokemon</div>
}

export {Pokemon}
