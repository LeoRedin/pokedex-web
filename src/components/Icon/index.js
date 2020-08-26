import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {Container} from './styles'

function Icon({name, color = '#fff'}) {
  return (
    <Container>
      <FontAwesomeIcon icon={name} color={color} size="sm" />
    </Container>
  )
}

export {Icon}
