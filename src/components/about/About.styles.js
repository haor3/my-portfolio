import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'

export const Container = styled.section`
  flex-direction: column;
  min-height: 720px;
  margin-top: 20px;
  align-items: center;
  display: flex;
`

export const Introduce = styled.div`
  line-eight: 110px;
  display: flex;
  justify-content: center;
  margin: 0px 20px;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const Paragraph = styled.p`
  color: #6e6e6e;
`
export const H3 = styled.h3`
  font-family: poppins-bold;
  font-size: ${props => (props.small ? '1.4rem' : '1.8rem')};
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  display: ${props => (props.small ? 'contents' : '')};
  color: ${props => (props.color ? props.color : '')};
  text-align: center;
`

export const Detail = styled.div`
  line-height: 500px;
  flex-direction: row;
  justify-content: space-evenly;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    display: '';
  }
`
export const DetailContent = styled.div`
  flex-direction: column;
  line-height: 0;
  width: 50%;
  text-align: left;
  line-height: 100%;
  padding: 5% 10%;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0;
  }
`

export const ButtonContainer = styled.div`
  line-height: 110px;
  display: flex;
  justify-content: center;
`

export const AvatarStyle = styled(Avatar)`
  margin: 10px !important;
  width: 120px !important;
  height: 120px !important;
  position: relative;
  top: 60px;
  @media (max-width: 768px) {
    top: 0;
  }
`

export const Content = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const PercentBox = styled.span`
  margin-bottom: 10px;
  width: fit-content;
  margin-right: ${props => 95 - props.marginRight}%;
  right: 0;
  top: -3.6rem;
  display: block;
  font-family: 'poppins-regular', sans-serif;
  color: white;
  font-size: 1.1rem;
  line-height: 1;
  background: #313131;
  padding: 0.6rem 0.6rem;
  border-radius: 3px;
`

export const Misc = styled.div`
  flex-direction: column;
  display: flex;
`

export const Strength = styled.div`
  display: flex;
`

export const AvatarStrength = styled(Avatar)`
  padding: 20px;
  width: 100px !important;
  height: 100px !important;
`
