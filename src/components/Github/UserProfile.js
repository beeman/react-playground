import React from 'react'

class UserProfile extends React.Component {
  render () {
    return (
      <div>
        <p>UserProfile </p>
        <p>Username: {this.props.username}</p>
        <p>Bio: {this.props.bio.name}</p>
      </div>
    )
  }
}

UserProfile.propTypes = {
  bio: React.PropTypes.object.isRequired,
  username: React.PropTypes.string.isRequired,
}


module.exports = UserProfile
