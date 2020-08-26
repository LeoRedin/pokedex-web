import React from 'react'

import {Menu} from '../Menu'

import {Container, ContainerTitle, Title, Subtitle} from './styles'

// Criar componente de Botão => 3 props
// Ícone(opcional)
// Conteúdo desse botão
// cor => cor padrão, primary, secundary, success, error

// Menu => Sobre, Logout, Home, Gerações

function Header() {
  return (
    <Container>
      <ContainerTitle>
        <Title>Pokédex</Title>
        <Subtitle>Procure por pokémons pelo nome ou região</Subtitle>
      </ContainerTitle>
      <Menu />
    </Container>
  )
}

export {Header}
