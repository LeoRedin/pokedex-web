import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 0;
  align-items: center;
  display: flex;
  height: 100px;
  background: linear-gradient(
        -213deg,
        rgb(94, 49, 220) 0%,
        rgb(49, 85, 220) 100%
      )
      right center / contain no-repeat,
    left center rgb(49, 85, 220);
  background-position: right center, left center;
  background-repeat: no-repeat;
`

export const ContainerTitle = styled.div``

export const Title = styled.h1`
  font-size: 2em;
  margin: 0;
  color: #fff;
  font-style: italic;
`
export const Subtitle = styled.p`
  margin: 0;
  font-size: 0.7em;
  color: #fff;
  font-style: italic;
`
export const Content = styled.div`
  width: 100%;
  flex-shrink: 0;
  padding: 10px 0 0 0;
  background: none;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
