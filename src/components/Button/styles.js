import styled from 'styled-components'
import {lighten} from 'polished'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  border-radius: 5px;
  padding: 0.35em;
  cursor: pointer;
  margin: 0 10px;
  height: 20px;
  min-width: 70px;
  &:hover {
    background-color: ${lighten(0.07, '#007bff')};
  }
`

export const ButtonText = styled.span`
  color: #fff;
  font-size: 0.7em;
`
