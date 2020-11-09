import styled from 'styled-components'
import List from '@material-ui/core/List'

export const Container = styled.div`
  height: 50px;
  background: #000000;
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 600;
`

export const ListStyle = styled(List)`
  height: 30px;
  display: flex;
  flex-direction: row;
  float: right;
  background-color: black;
  color: white !important;
  padding-bottom: 0 !important;
  padding-top: 0 !important;
`
