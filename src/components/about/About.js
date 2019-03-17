import React, { Component } from 'react'
import {
  Container,
  Introduce,
  Content,
  Detail,
  Paragraph,
  AvatarStyle,
  DetailContent,
  PercentBox,
  H3,
  Misc,
  Strength,
  AvatarStrength,
} from './About.styles.js'

import { LinearProgress } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  linearBarColorPrimary: {
    backgroundColor: '#e86971',
  },
  images: {
    objectFit: 'scale-down',
  },
}

class About extends Component {
  state = {
    skills: [
      {
        type: 'MERN',
        level: 85,
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
    details: [
      {
        title: 'profile',
        content: `A Junior Full Stack Developer who graduated from GBC seeks to develop knowledge, skills, relationships 
        with intelligent and talented people.`,
      },
      {
        title: 'fullname',
        content: 'Hao Bui',
      },
      {
        title: 'job',
        content: 'Full Stack Developer',
      },
      {
        title: 'email',
        content: 'iamhaobui@gmail.com',
      },
    ],
    strengths: [
      'images/strengths/mern.jpg',
      'images/strengths/styled-component.png',
      'images/strengths/material-ui.png',
      'images/strengths/mongodb.png',
      'images/strengths/sql.png',
      'images/strengths/android.png',
      'images/strengths/git.png',
      'images/strengths/heroku.jpg',
    ],
  }

  render() {
    const { classes } = this.props

    return (
      <Container id="about">
        <Introduce>
          <AvatarStyle alt="avatar" src="images/portfolio/profile.jpg" />
          <Content>
            <H3 small color="#e86971">
              About Me
            </H3>
            <H3>LET ME INTRODUCE MYSELF</H3>
            <Paragraph>
              “Success is not final, failure is not fatal: it is the courage to
              continue that counts.”
              <br />
              By{' '}
              <i>
                <b>Winston Churchill</b>
              </i>
            </Paragraph>
          </Content>
        </Introduce>

        <Detail>
          <DetailContent>
            {this.state.details.map(d => {
              return (
                <div>
                  {d.title === 'profile' ? (
                    <H3 color="#e86971">{d.title}</H3>
                  ) : (
                    <H3 small>{d.title}</H3>
                  )}
                  <Paragraph>{d.content}</Paragraph>
                </div>
              )
            })}
          </DetailContent>

          <DetailContent>
            <H3 color="#e86971">SKILLS</H3>
            {this.state.skills.map(s => {
              return (
                <div style={{ marginTop: '10px' }}>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <H3 small>{s.type}</H3>
                    <PercentBox marginRight={s.level}>{s.level}%</PercentBox>
                  </div>

                  <LinearProgress
                    classes={{
                      barColorPrimary: classes.linearBarColorPrimary,
                    }}
                    variant="determinate"
                    value={s.level}
                  />
                </div>
              )
            })}
          </DetailContent>
        </Detail>

        <Misc>
          <H3 color="#e86971">Strength</H3>
          <Strength>
            {this.state.strengths.map(s => {
              return (
                <AvatarStrength
                  classes={{ img: classes.images }}
                  alt="skill"
                  src={s}
                />
              )
            })}
          </Strength>
        </Misc>
      </Container>
    )
  }
}

export default withStyles(styles)(About)
