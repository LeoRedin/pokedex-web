import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {Container} from './styles'

function Icon({name, color = '#fff', size = 'sm'}) {
  return (
    <Container>
      <FontAwesomeIcon icon={name} color={color} size={size} />
    </Container>
  )
}

export {Icon}
