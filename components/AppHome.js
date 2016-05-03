import React from 'react'
import {
  Button,
} from 'react-bootstrap'

class AppHome extends React.Component {
  constructor () {
    super()
    this.state = {
      count: 0,
    }
    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick () {
    this.setState({ count: this.state.count + 1 })
  }

  render () {
    return (
      <div>
        <h1>Hi!</h1>
        <Button onClick={this.buttonClick}>Button click {this.state.count}</Button>
      </div>
    )
  }
}

export default AppHome
