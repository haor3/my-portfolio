import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'

import { Container } from './Navigation.styles'
const styles = {
  root: {
    flexGrow: 1,
    width: '200px',
    backgroundColor: 'black',
    color: 'white !important',
  },
  menuButton: {
    color: '#FF0077',
  },
}

class Navigation extends React.Component {
  state = {
    open: true,
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    const { classes } = this.props

    return (
      <Container>
        <List component="nav" className={classes.root}>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon className={classes.menuButton} aria-label="Menu">
              <MenuIcon />
            </ListItemIcon>
            <ListItemText disableTypography primary="HAO BUI" />
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText disableTypography inset primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemText disableTypography inset primary="About" />
              </ListItem>
              <ListItem button>
                <ListItemText disableTypography inset primary="Resume" />
              </ListItem>
              <ListItem button>
                <ListItemText disableTypography inset primary="Portfolio" />
              </ListItem>
              <ListItem button>
                <ListItemText disableTypography inset primary="Contact" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Container>
    )
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navigation)
