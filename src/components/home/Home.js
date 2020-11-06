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
        name: 'email',
        icon: 'fa fa-envelope',
        link: 'mailto:iamhaobui@gmail.com',
      },
      {
        name: 'linkedin',
        icon: 'fa fa-linkedin',
        link: 'https://www.linkedin.com/in/iamhaobui/',
        target: 'new',
      },
      {
        name: 'github',
        icon: 'fa fa-github',
        link: 'https://github.com/iamhaobui',
        target: 'new',
      },
    ],
  }

  render() {
    return (
      <Container id="home">
        <IntroContainer>
          <IntroContent h1>Hao Bui</IntroContent>
          <IntroContent intro-position>
            <span>Full Stack Developer</span>
          </IntroContent>
          <Button
            class="stroke smoothscroll"
            target="new"
            href="https://drive.google.com/file/d/1iupAcm6iooWBAF3BVWs3kUoE-KR7ExLK/view?usp=sharing"
            title=""
          >
            View Resume
          </Button>

          <SocialContainer>
            {this.state.social_links.map(social => {
              return (
                <SocialContent target={social.target} href={social.link}>
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
