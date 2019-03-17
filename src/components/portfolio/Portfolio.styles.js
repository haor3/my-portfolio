import styled from 'styled-components'
import { GridList, GridListTile } from '@material-ui/core'

export const Container = styled.div`
  flex-direction: column;
  min-height: 720px;
  text-align: center;
  margin-top: 20px;
`

export const Paragraph = styled.p`
  width: 50%;
  margin: auto;
`

export const H3 = styled.h3`
  font-family: poppins-bold;
  font-size: ${props => (props.small ? '1.4rem' : '1.8rem')};
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  display: ${props => (props.small ? 'contents' : '')};
  color: ${props => (props.color ? props.color : '')};
`

export const Detail = styled.div``
export const Experience = styled.div`
  display: flex;
  justify-content: space-evenly;
`
export const Education = styled.div`
  display: flex;
  justify-content: space-evenly;
`
export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const GridListContainer = styled.div`
  display: flex;
  flexwrap: wrap;
  margin: 0 auto;
  over-flow: hidden;
  width: 750px;
  text-align: center;
`

export const GridListStyle = styled(GridList)`
  width: 750;
  height: 450;
`

export const GridListTileStyle = styled(GridListTile)``
