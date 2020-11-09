import React from 'react'

import { Container } from './Navigation.styles'

class Navigation extends React.Component {
  state = {
    items: ['Home', 'Skills', 'Resume', 'Portfolio'],
  }

  render() {
    return (
      <Container>
        <ul class="nav justify-content-end">
          {this.state.items.map(item => {
            return (
              <>
                <li class="nav-item">
                  <a
                    style={{ color: 'white' }}
                    class="nav-link"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              </>
            )
          })}
        </ul>
      </Container>
    )
  }
}

export default Navigation
