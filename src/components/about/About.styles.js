import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

export const Container = styled.div`
  flex-direction: row;
  min-eight: 720px;
`

export const Introduce = styled.div`
  line-eight: 110px;
  display: flex;
  justify-content: center
    margin: 0px 20px
    align-items
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const Detail = styled.div`
  line-height: 500px;
  display: flex;
  justify-content: space-evenly;
`

export const Button = styled.div`
  line-height: 110px;
  display: flex;
  justify-content: center;
`

export const AvatarStyle = styled(Avatar)`
  margin: 10px !important;
  width: 120px !important;
  height: 120px !important;
  position: relative;
  top: 120px;
  @media (max-width: 768px) {
    top: 0;
  }
`

export const Content = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const DetailContent = styled.div`
  flex-direction: column;
  line-height: 0;
  width: 50%;
  text-align: left;
  line-height: 100%;
  padding: 5% 10%;
`
