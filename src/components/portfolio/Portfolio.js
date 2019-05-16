import React, { Component } from 'react'
import {
  Container,
  Detail,
  H3,
  GridListContainer,
  GridListStyle,
  GridListTileStyle,
  Img,
} from './Portfolio.styles'
import { withStyles } from '@material-ui/core'
import GridListTileBar from '@material-ui/core/GridListTileBar'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  image: {
    '&:hover': {
      color: 'blue',
    },
  },
}

const datas = [
  {
    name: `ChatApp - MERN Stack`,
    imageURL: 'images/portfolios/chat-app.png',
    cols: 1,
    link: 'https://github.com/iamhaobui/advancedChatApp',
  },
  {
    name: `OAuth`,
    imageURL: 'images/portfolios/oauth.png',
    cols: 2,
    link: 'https://github.com/iamhaobui/OAuth_Demo',
  },
  {
    name: `Video Store App - MEAN Stack`,
    imageURL: 'images/portfolios/video-store-app.png',
    cols: 2,
    link: 'https://github.com/iamhaobui/video_store_app',
  },
  {
    name: `Conference App - Android`,
    imageURL: 'images/portfolios/conference.png',
    cols: 1,
    link: 'https://github.com/tddag/conferenceApp',
  },
  {
    name: `Portfolio - React`,
    imageURL: 'images/portfolios/portfolio.png',
    cols: 1,
    link: 'https://github.com/iamhaobui/my-portfolio',
  },
  {
    name: `Capstone Project - MEAN Stack`,
    imageURL: 'images/portfolios/capstone.png',
    cols: 2,
    link: 'https://github.com/franklintrinh367/mean_project',
  },
]

class Portfolio extends Component {
  render() {
    return (
      <Container id="portfolio">
        <H3 small color="#e86971">
          Portfolio
        </H3>
        <H3>Check Out Some of My Works.</H3>
        <Detail>
          <GridListContainer>
            <GridListStyle cellHeight={160} cols={3}>
              {datas.map((d, index) => (
                <GridListTileStyle key={index} cols={d.cols || 1}>
                  <a href={d.link} target="_blank" rel="noopener noreferrer">
                    <Img src={d.imageURL} alt={d.name} />
                    <GridListTileBar title={d.name} />
                  </a>
                </GridListTileStyle>
              ))}
            </GridListStyle>
          </GridListContainer>
        </Detail>
      </Container>
    )
  }
}

export default withStyles(styles)(Portfolio)
