import React from 'react'
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
import Notes from './Notes/Notes'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'

const Profile = React.createClass({
  mixins: [ ReactFireMixin ],
  getInitialState: function() {
    return {
      notes: [ ],
      bio: {
        name: 'Default Bio Name',
      },
      repos: [ 'b' ],
    }
  },
  componentDidMount: function() {
    this.ref = new Firebase(FIREBASE_URL)
    const childRef = this.ref.child(this.props.params.username)
    this.bindAsArray(childRef, 'notes')
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
