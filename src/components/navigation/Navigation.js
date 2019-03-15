import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'

import { Container, ListStyle } from './Navigation.styles'

class Navigation extends React.Component {
  state = {
    open: false,
    items: ['Home', 'About', 'Resume', 'Portfolio', 'Contact'],
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    return (
      <Container>
        <ListStyle component="nav">
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon style={{ color: '#FF0077' }} aria-label="Menu">
              <MenuIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary="HAO BUI" />
          </ListItem>
          <Collapse in={this.state.open} timeout="auto">
            <List component="div" disablePadding>
              {this.state.items.map(item => {
                return (
                  <ListItem button>
                    <ListItemText disableTypography inset primary={item} />
                  </ListItem>
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
