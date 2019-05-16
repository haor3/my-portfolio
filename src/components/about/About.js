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
} from './About.styles.js'

import { LinearProgress } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import MobileStepper from '@material-ui/core/MobileStepper'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import Button from '@material-ui/core/Button'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const styles = theme => ({
  linearBarColorPrimary: {
    backgroundColor: '#e86971',
  },
  images: {
    objectFit: 'scale-down',
  },
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
})
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
        content: `Junior Full Stack Developer who graduated from GBC has enthusiasm in learning and self-development in technology, software to become a professional engineer.`,
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
    activeStep: 0,
  }

  handleStepChange = activeStep => {
    this.setState({ activeStep })
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }))
  }

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }))
  }

  render() {
    const { classes, theme } = this.props
    const { activeStep, strengths } = this.state
    const maxSteps = strengths.length
    return (
      <Container id="about">
        <Introduce>
          <AvatarStyle alt="avatar" src="images/portfolios/profile.jpg" />
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
          <div
            style={{
              maxWidth: '400px',
              margin: '0 auto',
            }}
          >
            <AutoPlaySwipeableViews
              style={{
                textAlign: '-webkit-center',
              }}
              index={activeStep}
              onChangeIndex={this.handleStepChange}
              enableMouseEvents
            >
              {this.state.strengths.map((step, index) => (
                <Strength key={step.label}>
                  {Math.abs(activeStep - index) <= 0 ? (
                    <img
                      width="300px"
                      height="300px"
                      style={{ objectFit: 'scale-down' }}
                      src={step}
                      alt="skill"
                    />
                  ) : null}
                </Strength>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              className={classes.mobileStepper}
              nextButton={
                <Button
                  size="small"
                  onClick={this.handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={this.handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </div>
        </Misc>
      </Container>
    )
  }
}

export default withStyles(styles, { withTheme: true })(About)
