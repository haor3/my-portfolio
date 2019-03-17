import styled from 'styled-components'
import List from '@material-ui/core/List'
import { HashLink as Link } from 'react-router-hash-link'

export const Container = styled.div`
  display: block;
  background: #000000;
  min-width: 200px;
  min-height: 45px;
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
  padding-bottom: 0 !important;
  padding-top: 0 !important;
`

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
`
