import React from 'react'

import {Icon} from 'components/Icon'

import {Container, ButtonText} from './styles'

function Button({children, icon}) {
  const element = icon ? (
    <>
      <Icon name={icon} />
      <ButtonText>{children}</ButtonText>
    </>
  ) : (
    <ButtonText>{children}</ButtonText>
  )
  return <Container>{element}</Container>
}

export {Button}
