import React from 'react'

import {Container} from './styles'

function PokemonCard({id, name, types, image}) {
  return (
    <Container>
      #{id}
      <br />
      {name}
      <br />
      {types.map(type => (
        <>
          <span key={type}>{type.type.name}</span> {''}
        </>
      ))}
      <br />
      <div>
        <img src={image} alt={`Imagem do ${name}`} width="130" height="130" />
      </div>
    </Container>
  )
}

export {PokemonCard}
