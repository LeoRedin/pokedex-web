import React from 'react'
import {Link} from 'react-router-dom'

import {Button} from '../Button'

import {icons} from '../../utils/icons'

import {Container} from './styles'

// 4 botões de navegação
// Criar o botão

function Menu() {
  const buttons = [
    {
      name: 'Home',
      icon: icons.HOME,
      linkTo: '/',
    },
    {
      name: 'Gerações',
      linkTo: '/geracoes',
    },
    {
      name: 'Sobre',
      icon: icons.INFO,
      linkTo: '/sobre',
    },
    {
      name: 'Logout',
      icon: icons.LOGOUT,
      linkTo: '/',
    },
  ]
  return (
    <Container>
      {buttons.map(button => (
        <Link key={button.name} to={button.linkTo}>
          <Button icon={button.icon}>{button.name}</Button>
        </Link>
      ))}
    </Container>
  )
}

export {Menu}
