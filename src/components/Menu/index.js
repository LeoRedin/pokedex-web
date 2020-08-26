import React from 'react'

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
    },
    {
      name: 'Gerações',
    },
    {
      name: 'Sobre',
      icon: icons.INFO,
    },
    {
      name: 'Logout',
      icon: icons.LOGOUT,
    },
  ]
  return (
    <Container>
      {buttons.map(button => (
        <Button key={button.name} icon={button.icon}>
          {button.name}
        </Button>
      ))}
    </Container>
  )
}

export {Menu}
