import styled from 'styled-components'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'

export const Container = styled.div`
  flex-direction: column;
  min-eight: 720px;
  text-align: center;
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
