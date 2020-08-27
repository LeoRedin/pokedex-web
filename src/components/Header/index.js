import React from 'react'

import {Menu} from 'components/Menu'

import {Container, ContainerTitle, Title, Subtitle, Content} from './styles'

function Header() {
  return (
    <Container>
      <Content>
        <ContainerTitle>
          <Title>Pokédex</Title>
          <Subtitle>Procure por pokémons pelo nome ou região</Subtitle>
        </ContainerTitle>
        <Menu />
      </Content>
    </Container>
  )
}

export {Header}
