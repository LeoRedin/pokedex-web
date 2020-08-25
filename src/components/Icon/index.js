import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Icon({name, color}) {
  return <FontAwesomeIcon icon={name} color={color} />
}

export {Icon}
