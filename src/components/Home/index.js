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
        // Promise.all([promise1, promise2, promise3]).then(() => {})
        const updatedPokemons = []
        pokeData.pokemons.map(async (poke, index) => {
          const {data} = await api.get(poke.url)
          const uniquePoke = {
            id: data.id,
            name: data.name,
            types: data.types,
            image: data.sprites.other['official-artwork'].front_default,
          }

          updatedPokemons.push(uniquePoke)

          if (index === 2) {
            setPokemons(updatedPokemons)
            setLoading(false)
          }
        })
      }
    }

    getPokes()
  }, [])

  if (loading) return <span style={{color: '#fff'}}>Loading...</span>

  return (
    <Wrapper>
      {pokemons.map(poke => (
        <PokeInfo key={poke.name}>
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
