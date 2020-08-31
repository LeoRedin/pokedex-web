import React from 'react'

import {Icon} from 'components/Icon'

import {icons} from 'utils/icons'

import {Container, Link, Logout, Content} from './styles'

// 4 botões de navegação
// Criar o botão

function Menu() {
  const menuItems = [
    {
      name: 'Home',
      linkTo: '/',
    },
    {
      name: 'Pokemons',
      linkTo: '/pokemons',
    },
    {
      name: 'Gerações',
      linkTo: '/geracoes',
    },
    {
      name: 'Sobre',
      linkTo: '/sobre',
    },
  ]

  return (
    <Container>
      <Content>
        {menuItems.map(item => (
          <Link
            exact
            activeClassName="menu-active"
            key={item.name}
            to={item.linkTo}
          >
            {item.name}
          </Link>
        ))}
        <Logout>
          <Link to="/logout">
            <Icon name={icons.USER} size="1x" /> Sair
          </Link>
        </Logout>
      </Content>
    </Container>
  )
}

export {Menu}
