import React from 'react'

class Repos extends React.Component {
  render () {
    return (
      <div>
        <p>Repos</p>
        {this.props.repos}
      </div>
    )
  }
}

Repos.propTypes = {
  repos: React.PropTypes.array.isRequired,
  username: React.PropTypes.string.isRequired,
}

module.exports = Repos
