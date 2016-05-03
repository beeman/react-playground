import React from 'react'
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
import Notes from './Notes/Notes'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import helpers from '../utils/helpers'

const Profile = React.createClass({
  mixins: [ ReactFireMixin ],
  getInitialState: function() {
    return {
      notes: [],
      bio: {},
      repos: [],
    }
  },
  componentDidMount: function() {
    this.ref = new Firebase(FIREBASE_URL)
    this.init(this.props.params.username)
  },
  componentWillReceiveProps: function(nextProps) {
    this.unbind('notes')
    this.init(nextProps.params.username)
  },
  init: function(username) {
    const childRef = this.ref.child(username)
    this.bindAsArray(childRef, 'notes')
    helpers.getGithubInfo(username)
      .then((data) => {
        this.setState({
          bio: data.bio,
          repos: data.repos,
        })
      })
      .catch(err => {
        console.error(err)
      })
  },
  componentWillUnmount: function() {
    this.unbind('notes')
  },
  handleAddNote: function(newNote) {
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes
            addNote={this.handleAddNote}
            notes={this.state.notes}
            username={this.props.params.username}/>
        </div>
      </div>
    )
  }
})

module.exports = Profile
