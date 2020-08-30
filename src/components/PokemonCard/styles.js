import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {colors} from 'theme'

export const Container = styled(Link)`
  width: 330px;
  heihgt: 115px;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
  position: relative;
  margin: 20px;
  background: ${({types}) => colors.backgrounds[types[0].type.name]};
  border-radius: 10px;
  text-decoration: none;
`

export const Id = styled.div`
  font-weight: bold;
  color: rgba(23, 23, 27, 0.6);
  line-height: 14px;
  font-size: 1.5em;
`

export const Name = styled.div`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 2em;
  line-height: 31px;
  color: #fff;
  margin: 10px 0;
`

export const Badges = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Badge = styled.div`
  width: 65px;
  height: 25px;
  border-radius: 3px;
`
export const BadgeImage = styled.img`
  border-radius: 3px;
`

export const PokemonImage = styled.div`
  position: absolute;
  top: -30%;
  right: 0;
`
