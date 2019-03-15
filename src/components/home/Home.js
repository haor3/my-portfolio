import React, { Component } from 'react'
import {
  IntroContainer,
  Container,
  IntroContent,
  Button,
  SocialContainer,
  SocialContent,
} from './Home.styles'

class Home extends Component {
  state = {
    social_links: [
      {
        name: 'linkedin',
        icon: 'fa fa-linkedin',
        link: 'https://www.linkedin.com/in/iamhaobui/',
      },
      {
        name: 'github',
        icon: 'fa fa-github',
        link: 'https://github.com/iamhaobui',
      },
    ],
  }

  render() {
    return (
      <Container>
        <IntroContainer>
          <IntroContent h5>Hello, World.</IntroContent>
          <IntroContent h1>I'm Hao Bui.</IntroContent>
          <IntroContent intro-position>
            <span>Full Stack Developer</span>
          </IntroContent>
          <Button class="stroke smoothscroll" href="#about" title="">
            More About Me
          </Button>

          <SocialContainer>
            {this.state.social_links.map(social => {
              return (
                <SocialContent target="new" href={social.link}>
                  <i class={social.icon} />
                </SocialContent>
              )
            })}
          </SocialContainer>
        </IntroContainer>
      </Container>
    )
  }
}

export default Home
