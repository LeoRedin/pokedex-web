import React from 'react'

import {Icon} from 'components/Icon'
import {icons} from 'utils/icons'

import {Container, Title, InputContent, Input} from './styles'

function Home({history}) {
  const [pokeName, setPokeName] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const path = `/pokemon/${pokeName}`
    history.push(path)
  }

  return (
    <Container>
      <Title>
        Procure <br />
        pokémons por <br />
        nome ou geração
      </Title>
      <InputContent>
        <Icon name={icons.SEARCH} size="1x" />
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Deoxys"
            value={pokeName}
            onChange={e => setPokeName(e.target.value)}
          />
        </form>
      </InputContent>
    </Container>
  )
}

export {Home}
