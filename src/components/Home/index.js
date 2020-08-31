import React from 'react'

import {Icon} from 'components/Icon'
import {icons} from 'utils/icons'

import {Container, Title, InputContent, Input} from './styles'

function Home() {
  const [pokeName, setPokeName] = React.useState('')

  return (
    <Container>
      <Title>
        Procure <br />
        pokémons por <br />
        nome ou geração
      </Title>
      <InputContent>
        <Icon name={icons.SEARCH} size="md" />
        <Input
          placeholder="Deoxys"
          value={pokeName}
          onChange={e => setPokeName(e.target.value)}
        />
      </InputContent>
    </Container>
  )
}

export {Home}
