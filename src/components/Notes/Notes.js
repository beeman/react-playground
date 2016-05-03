import React from 'react'
import NotesList from './NotesList'
import NoteAdd from './NoteAdd'

class Notes extends React.Component {
  render () {
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <NoteAdd username={this.props.username} addNote={this.props.addNote} />
        <NotesList notes={this.props.notes}/>
      </div>
    )
  }
}

Notes.propTypes = {
  addNote: React.PropTypes.func.isRequired,
  notes: React.PropTypes.array.isRequired,
  username: React.PropTypes.string.isRequired,
}

module.exports = Notes
