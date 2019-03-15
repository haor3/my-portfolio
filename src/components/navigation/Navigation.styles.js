import styled from 'styled-components'
import List from '@material-ui/core/List'

export const Container = styled.div`
  display: block;
  background: #000000;
  min-width: 220px;
  min-height: 66px;
  left: 70px;
  top: 0;
  position: fixed;
  z-index: 600;
`

export const ListStyle = styled(List)`
  flexgrow: 1;
  width: 200px;
  background-color: black;
  color: white !important;
`
