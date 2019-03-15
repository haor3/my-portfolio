import React, { Component } from 'react'
import img from '../../images/profile.jpg'
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
  SmallH3,
} from './About.styles.js'

import { LinearProgress } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  linearBarColorPrimary: {
    backgroundColor: '#e86971',
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
        content: `A full stack developer who graduated from GBC seeks to develop knowledge, skills, relationships 
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
  }

  render() {
    const { classes } = this.props

    return (
      <Container>
        <Introduce>
          <AvatarStyle alt="avatar" src={img} />
          <Content>
            <H3 small color="#e86971">
              About Me
            </H3>
            <H3>LET ME INTRODUCE MYSELF</H3>
            <Paragraph>
              " Work like hell. You just have to put in 80 to 100 hour weeks
              every week. This improves the odds of success. If other people are
              putting in 40 hour workweeks and you're putting in 100 hour
              workweeks, then even if you're doing the same thing, you know that
              you will achieve in four months what it takes them a year to
              achieve."
              <br />
              By <i>Elon Musk, CEO of Tesla</i>
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
      </Container>
    )
  }
}

export default withStyles(styles)(About)
