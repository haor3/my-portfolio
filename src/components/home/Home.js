import React, { Component } from 'react'
import {
  IntroContainer,
  IntroOverlay,
  Container,
  IntroContent,
  Button,
  SocialContainer,
  SocialContent,
} from './Home.styles'

class Home extends Component {
  render() {
    return (
      <Container>
        <IntroOverlay />
        <IntroContainer>
          <IntroContent h5>Hello, World.</IntroContent>
          <IntroContent h1>I'm Hao Bui.</IntroContent>
          <IntroContent intro-position>
            <span>Full Stack Developer</span>
          </IntroContent>
          <Button class="stroke smoothscroll" href="#about" title="">
            More About Me
          </Button>
        </IntroContainer>

        <SocialContainer>
          <SocialContent href="#">
            <i class="fa fa-facebook" />
          </SocialContent>
          <SocialContent href="#">
            <i class="fa fa-behance" />
          </SocialContent>
          <SocialContent href="#">
            <i class="fa fa-twitter" />
          </SocialContent>
          <SocialContent href="#">
            <i class="fa fa-dribbble" />
          </SocialContent>
          <SocialContent href="#">
            <i class="fa fa-instagram" />
          </SocialContent>
        </SocialContainer>
      </Container>
    )
  }
}

export default Home
