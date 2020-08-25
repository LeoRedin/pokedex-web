import React, {useState} from 'react'
import {icons as iconsNames} from '../../utils/icons'

import {Icon} from '../Icon'

import {Container, ContainerTitle, Title, Subtitle} from './styles'

function Header() {
  const icons = [
    {
      name: iconsNames.FILTER_UP,
      color: 'red',
    },
    {
      name: iconsNames.SORT_ALPHA,
      color: 'orange',
    },
  ]

  return (
    <Container>
      <ContainerTitle>
        <Title>Pokédex</Title>
        <Subtitle>Procure por pokémons pelo nome ou região</Subtitle>
      </ContainerTitle>
      <Search />
      {icons.map(({name, color}) => (
        <Icon key={name} name={name} color={color} />
      ))}
    </Container>
  )
}

function Search() {
  const [pokemonName, setPokemonName] = useState('')
  return (
    <div>
      <input
        placeholder="Qual pokemon quer pesquisar?"
        value={pokemonName}
        onChange={e => setPokemonName(e.target.value)}
      />
    </div>
  )
}

// Esquerda Pokedex, title, nome do app
// Barra de busca => filtrar a lista
// 3 ícones filtros

export {Header}
