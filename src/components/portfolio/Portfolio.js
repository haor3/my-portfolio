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
    name: `react`,
    imageURL: 'images/portfolio/react.png',
    cols: 1,
  },
  {
    name: `mongodb`,
    imageURL: 'images/portfolio/mongodb.png',
    cols: 2,
  },
  {
    name: `sql`,
    imageURL: 'images/portfolio/sql.png',
    cols: 2,
  },
  {
    name: `redux`,
    imageURL: 'images/portfolio/redux.png',
    cols: 1,
  },

  {
    name: `mu`,
    imageURL: 'images/portfolio/mu.png',
    cols: 1,
  },
]

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tileBar: false,
    }
  }
  renderTileBar = () => {
    this.setState({
      tileBar: true,
    })
  }
  hideTileBar = () => {
    this.setState({
      tileBar: false,
    })
  }
  render() {
    const { classes } = this.props

    return (
      <Container>
        <H3 small color="#e86971">
          Portfolio
        </H3>
        <H3>Check Out Some of My Works.</H3>
        <Detail>
          <GridListContainer>
            <GridListStyle cellHeight={160} cols={3}>
              {datas.map((d, index) => (
                <GridListTileStyle
                  onMouseOver={() => this.renderTileBar()}
                  onMouseOut={() => this.hideTileBar()}
                  key={index}
                  cols={d.cols || 1}
                >
                  <Img src={d.imageURL} alt={d.name} />
                  {this.state.tileBar && (
                    <GridListTileBar
                      style={{
                        height: '100%',
                      }}
                      title={d.name}
                    />
                  )}
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
