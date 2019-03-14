import React, { Component } from 'react'
import img from '../../images/profile.jpg'
import Grid from '@material-ui/core/Grid'
import {
  Container,
  Introduce,
  Content,
  Detail,
  Button,
  AvatarStyle,
  DetailContent,
} from './About.styles.js'
import SkillBar from 'react-skillbars'
import { ProgressBar } from 'react-bootstrap'

class About extends Component {
  state = {
    skills: [
      {
        type: 'MERN',
        level: 85,
      },
      {
        type: 'Material UI',
        level: 80,
      },
      {
        type: ' Git',
        level: 90,
      },
      {
        type: 'NodeJS',
        level: 80,
      },
      {
        type: 'Python',
        level: 70,
      },
      {
        type: 'SQL',
        level: 75,
      },
    ],
  }

  render() {
    return (
      <Container>
        <Introduce>
          <AvatarStyle alt="avatar" src={img} />
          <Content>
            <h3>About Me</h3>
            <h1>Let me introduce myself</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Content>
        </Introduce>

        <Detail>
          <DetailContent>
            <h3>PROFILE</h3>
            <p>
              Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut
              esse in magna sint minim officia consectetur nisi commodo ea magna
              pariatur nisi cillum.
            </p>
            <h3>FULLNAME</h3>
            <p>Hao Bui</p>
            <h3>JOB</h3>
            <p>Full Stack Developer</p>
            <h3>EMAIL</h3>
            <p>iamhaobui@gmail.com</p>
          </DetailContent>
          <DetailContent>
            {/* <h3>SKILLS</h3>
              <p>
              Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.
              </p>
            <h3>FULLNAME</h3>
              <p>Hao Bui</p>
            <h3>JOB</h3>
              <p>Full Stack Developer</p>
            <h3>EMAIL</h3>
              <p>iamhaobui@gmail.com</p> */}
            <h3>SKILLS</h3>
            <SkillBar skills={this.state.skills} />
            <h2>Java</h2>
            <ProgressBar animated now={45} />
          </DetailContent>
        </Detail>

        <Button>button</Button>
      </Container>
    )
  }
}

export default About
