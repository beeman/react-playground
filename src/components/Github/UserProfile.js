import React from 'react'

const UserProfile = ({ bio }) => {
  const bioUrl = `https://github.com/${bio.login}`
  return (
    <div>
      <h3>User Profile</h3>
      { bio.avatar_url && <li className="list-group-item"> <img className="img-rounded img-responsive" src={bio.avatar_url}/> </li> }
      { bio.name && <li className="list-group-item"> Name: {bio.name} </li> }
      { bio.login && <li className="list-group-item"> Username: <a href={bioUrl}>{bio.login} </a> </li> }
      { bio.email && <li className="list-group-item"> Email: {bio.email} </li> }
      { bio.location && <li className="list-group-item"> Location: {bio.location} </li> }
      { bio.company && <li className="list-group-item"> Company: {bio.company} </li> }
      { bio.followers && <li className="list-group-item"> Followers: {bio.followers} </li> }
      { bio.following ? <li className="list-group-item"> Following: {bio.following} </li> : '' }
      { bio.public_repos && <li className="list-group-item"> Public Repos: {bio.public_repos} </li> }
      { bio.blog && <li className="list-group-item"> <a href={bio.blog}>{bio.blog}</a> </li> }
    </div>
  )
}

UserProfile.propTypes = {
  bio: React.PropTypes.object.isRequired,
}

export default UserProfile
