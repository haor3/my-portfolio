import React, { Component } from 'react'
import { Container, H3, Detail } from '../resume/Resume.styles'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'

class Resume extends Component {
  experiences = [
    {
      title: 'Front End Developer',
      time: 'Oct, 2019 - Present',
      company: 'Ansik. Inc, Toronto, ON',
      description: [
        `Work on Dashboard features by using Javascript ES6, React, MobX and Ant Design library`,
        `Able to hanlde backend development with NodeJS, TypeScript`,
        `Follow TDD principles to create unit tests with Jest and Enzyme`,
        `Design and build REST APIs web services with Swagger`,
        `Use Postgres to handle SQL queries`,
        `Enhance data fetching performance > 80% by code optimization, index table`,
      ],
    },
    {
      title: 'Front End Developer, Internship',
      time: 'Oct, 2018 - May, 2019',
      company: 'TREASURED, Markham, ON',
      description: [
        `Work side by side with team on front-end by using ReactJS, Redux and Redux-Saga development`,
        `Implement full-stack features end to end to utilize a mix of back-end and front-end architectures`,
        `Fix display issues on the site and investigate errors/bugs in code`,
        `Developed and integrated UI/UX designs for website`,
      ],
    },
    {
      title: `GBC Mobihelp Tutor`,
      time: `Feb, 2018 - Sept, 2018`,
      company: `GEORGE BROWN COLLEGE, Toronto, ON`,
      description: [
        `Help peers to understand core concepts of courses such as Javascript, SQL, HTML/CSS, etc.`,
        `Give feedback on students' homework, assignments and solutions.`,
        `Providing challenge questions to help students review and expand their knowledge.`,
      ],
    },
  ]

  schools = [
    {
      name: `GEORGE BROWN COLLEGE, Toronto, ON`,
      major: `Computer Programmer Analyst`,
      time: `Jan, 2017 - May, 2019`,
      gpa: `3.9/4.0 (as of January, 2019)`,
      awards: `Dean's Lists (2017, 2018, 2019)`,
    },
  ]

  render() {
    return (
      <Container id="resume">
        <br />
        <Detail>
          {/* Experience */}
          <H3 small color="#e86971">
            Work Experience
          </H3>
          <Timeline lineColor={'#ddd'}>
            {this.experiences.map(exp => {
              return (
                <TimelineItem
                  key="001"
                  dateText={exp.time}
                  style={{ color: '#e86971' }}
                >
                  <h3>{exp.company}</h3>
                  <h4>
                    <i>{exp.title}</i>
                  </h4>
                  <ul>
                    {exp.description.map(des => {
                      return <li>{des}</li>
                    })}
                  </ul>
                </TimelineItem>
              )
            })}
          </Timeline>

          {/* Education */}
          <H3 small color="#e86971">
            Education
          </H3>
          <Timeline lineColor={'#ddd'}>
            {this.schools.map(sch => {
              return (
                <TimelineItem
                  key="001"
                  dateText={sch.time}
                  style={{ color: '#e86971' }}
                >
                  <h3>{sch.name}</h3>
                  <h4>
                    <i>{sch.major}</i>
                  </h4>
                  <ul>
                    {sch.gpa !== '' && (
                      <li>
                        <b>GPA:</b> {sch.gpa}
                      </li>
                    )}
                    {sch.awards !== '' && (
                      <li>
                        <b>Awards:</b> {sch.awards}
                      </li>
                    )}
                  </ul>
                </TimelineItem>
              )
            })}
          </Timeline>
        </Detail>
      </Container>
    )
  }
}

export default Resume
