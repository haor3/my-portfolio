import React, { Component } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

class Grid extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default Grid
