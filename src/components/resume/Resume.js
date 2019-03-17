import React, { Component } from 'react'
import { Container, Paragraph, H3, Detail, Misc } from '../resume/Resume.styles'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'

class Resume extends Component {
  experiences = [
    {
      title: 'Repair And Service Representative',
      time: 'Jan, 2019 - Present',
      company: 'AI INCORPORATED, Toronto, ON',
      description: [
        `Managing shop inventory`,
        `Shipping out and receiving parts, new machines`,
        `Troubleshooting mechanical issues`,
        `Repairing broken machines and replacing motors, sensors and buttons`,
        `Processing incoming units and data entry through Google drive services`,
      ],
    },
    {
      title: 'Front End Developer, Internship',
      time: 'Oct, 2018 - Present',
      company: 'TREASURED, Markham, ON',
      description: [
        `Modify app component using React and Material UI`,
        `Working with API and Redux-Saga`,
      ],
    },
    {
      title: `Web Administrator`,
      time: `May, 2018 - June, 2018`,
      company: `SAGAVAPE.COM, Toronto, ON`,
      description: [
        `Use HTML/CSS, JavaScript, jQuery to maintain and develop an e-commerce website based on Shopify platform.`,
        `Implement SEO to get traffic for the website.`,
        ` Make research about products, write articles and contents.`,
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
    {
      name: `INTERNATIONAL UNIVERSITY – VNU, Vietnam`,
      major: `Bachelor of Business Administration`,
      time: `2012 - 2016`,
      gpa: `3.1/4.0`,
      awards: ``,
    },
  ]

  render() {
    return (
      <Container id="resume">
        <br />
        <H3 small color="#e86971">
          Resume
        </H3>
        <H3>More of my credentials.</H3>

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
