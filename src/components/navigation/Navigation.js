import React from 'react'

import MenuIcon from '@material-ui/icons/Menu'
import {
  ListItemIcon,
  ListItemText,
  Collapse,
  ListItem,
  List,
} from '@material-ui/core'

import { Container, ListStyle, LinkStyle } from './Navigation.styles'

class Navigation extends React.Component {
  state = {
    open: false,
    items: ['Home', 'Skills', 'Resume', 'Portfolio'],
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    // const settings = settings
    return (
      <Container>
        <ListStyle>
          {this.state.items.map(item => {
            return (
              <LinkStyle to={`#${item.toLowerCase()}`}>
                <ListItem button>
                  <ListItemText
                    disableTypography
                    inset
                    primary={item.toUpperCase()}
                  />
                </ListItem>
              </LinkStyle>
            )
          })}
        </ListStyle>
      </Container>
    )
  }
}

export default Navigation
