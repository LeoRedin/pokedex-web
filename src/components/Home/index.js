import React from 'react'

import {getInitialPokemons, api} from 'services/api'

import {Wrapper, PokeInfo} from './styles'

function Home() {
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

  if (loading) return <span style={{color: '#fff'}}>Loading...</span>

  return (
    <Wrapper>
      {pokemons.map(poke => (
        <PokeInfo key={poke.id}>
          #{poke.id}
          <br />
          {poke.name}
          <br />
          {poke.types.map(type => (
            <>
              <span key={type}>{type.type.name}</span> {''}
            </>
          ))}
          <br />
          <div>
            <img
              src={poke.image}
              alt={`Imagem do ${poke.name}`}
              width="130"
              height="130"
            />
          </div>
        </PokeInfo>
      ))}
    </Wrapper>
  )
}

export {Home}
