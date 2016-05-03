import React from 'react'
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
import Notes from './Notes/Notes'
import getGithubInfo from '../utils/helpers'
import Rebase from 're-base'

const base = Rebase.createClass(FIREBASE_URL)

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      notes: [],
      bio: {},
      repos: [],
    }
  }

  componentDidMount () {
    this.init(this.props.params.username)
  }

  componentWillReceiveProps (nextProps) {
    base.removeBinding(this.ref)
    this.init(nextProps.params.username)
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  init (username) {
    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes',
    })

    getGithubInfo(username)
      .then((data) => {
        this.setState({
          bio: data.bio,
          repos: data.repos,
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  handleAddNote (newNote) {
    base.post(this.props.params.username, {
      data: this.state.notes.concat([ newNote ])
    })
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes
            addNote={(newNote) => this.handleAddNote(newNote)}
            notes={this.state.notes}
            username={this.props.params.username}/>
        </div>
      </div>
    )
  }
}

export default Profile
