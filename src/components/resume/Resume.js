import React, { Component } from 'react'
import {
  Container,
  Paragraph,
  H3,
  Detail,
  Experience,
  Education,
} from '../resume/Resume.styles'

class Resume extends Component {
  render() {
    return (
      <Container>
        <H3 small color="#cc005f">
          Resume
        </H3>
        <H3>More of my credentials.</H3>

        <Detail>
          {/* Experience */}
          <H3 small color="#cc005f">
            Work Experience
          </H3>
          <Experience>
            <div>
              <h2>Title</h2>
              <h3>Time</h3>
            </div>
            <i style={{ marginTop: '20px' }} class="fa fa-briefcase" />
            <div>
              <h2>Name</h2>
              <h3>Desciption</h3>
            </div>
          </Experience>
          <Experience>
            <div>
              <h2>Title</h2>
              <h3>Time</h3>
            </div>
            <i style={{ marginTop: '20px' }} class="fa fa-briefcase" />
            <div>
              <h2>Name</h2>
              <h3>Desciption</h3>
            </div>
          </Experience>

          {/* Education */}
          <H3 small color="#cc005f">
            Education
          </H3>
          <Education>
            <div
              style={{
                borderRight: '2px solid',
              }}
            >
              <h2>Title</h2>
              <h3>Time</h3>
            </div>
            <i style={{ marginTop: '20px' }} class="fa fa-graduation-cap" />
            <div>
              <h2>Name</h2>
              <h3>Desciption</h3>
            </div>
          </Education>
          <Education>
            <div>
              <h2>Title</h2>
              <h3>Time</h3>
            </div>
            <i style={{ marginTop: '20px' }} class="fa fa-graduation-cap" />
            <div>
              <h2>Name</h2>
              <h3>Desciption</h3>
            </div>
          </Education>
        </Detail>
      </Container>
    )
  }
}

export default Resume
