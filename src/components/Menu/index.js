import React from 'react'
import {useDispatch} from 'react-redux'
import {Icon} from 'components/Icon'

import {icons} from 'utils/icons'

import {Container, Link, Logout, Content, LogoutButton} from './styles'

// 4 botões de navegação
// Criar o botão

function Menu() {
  const dispatch = useDispatch()

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

  function logout() {
    dispatch({type: 'LOGOUT'})
  }

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
          <LogoutButton onClick={logout}>
            <Icon name={icons.USER} size="1x" /> Sair
          </LogoutButton>
        </Logout>
      </Content>
    </Container>
  )
}

export {Menu}
