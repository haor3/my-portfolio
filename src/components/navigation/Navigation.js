import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'

import { Container, ListStyle, LinkStyle } from './Navigation.styles'

class Navigation extends React.Component {
  state = {
    open: false,
    items: ['Home', 'About', 'Resume', 'Portfolio'],
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    return (
      <Container>
        <ListStyle component="nav">
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon style={{ color: '#e86971' }} aria-label="Menu">
              <MenuIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary="HAO BUI" />
          </ListItem>
          <Collapse in={this.state.open} timeout="auto">
            <List component="div" disablePadding>
              {this.state.items.map(item => {
                return (
                  <LinkStyle to={`#${item.toLowerCase()}`}>
                    <ListItem button>
                      <ListItemText disableTypography inset primary={item} />
                    </ListItem>
                  </LinkStyle>
                )
              })}
            </List>
          </Collapse>
        </ListStyle>
      </Container>
    )
  }
}

export default Navigation
