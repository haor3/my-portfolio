import styled from 'styled-components'

export const Container = styled.section`
  flex-direction: column;
  min-height: 720px;
  text-align: center;
  background: #ebebeb;
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
