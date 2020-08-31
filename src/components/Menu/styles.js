import styled from 'styled-components'
import {Link as RLink} from 'react-router-dom'

export const Container = styled.nav`
  display: flex;
  z-index: 1;
`
export const Link = styled(RLink)`
  display: flex;
  text-decoration: none;
  color: #fff;
  margin: 0 15px;
  font-size: 1.1em;
  font-weight: bold;

  &::active {
    text-decoration: none;
    color: #fff;
  }
`

export const Logout = styled.div`
  display: flex;
  margin-left: 50%;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`
