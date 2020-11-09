import React, { Component } from 'react'
import { Container, H3 } from './Skill.styles.js'

import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

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
    skills: [
      'images/skills/mern.jpg',
      'images/skills/mobx.png',
      'images/skills/swagger.png',
      'images/skills/jest.png',
      'images/skills/styled-component.png',
      'images/skills/material-ui.png',
      'images/skills/sql.png',
      'images/skills/git.png',
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
    return (
      <Container id="skills">
        <H3 color="#e86971">Skills</H3>
        <Grid style={{ justifyContent: 'center' }} container spacing={1}>
          {this.state.skills.map((step, index) => {
            return (
              <>
                <Grid container item lg={3} md={3} xs={5}>
                  <img
                    width="70%"
                    height="70%"
                    style={{
                      objectFit: 'scale-down',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                    src={step}
                    alt="skill"
                  />
                </Grid>
              </>
            )
          })}
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles, { withTheme: true })(About)
