import React from 'react'
import NotesList from './NotesList'
import NoteAdd from './NoteAdd'

const Notes = ({ addNote, notes, username }) => (
  <div>
    <h3>Notes for {username}</h3>
    <NoteAdd
      username={username}
      addNote={addNote}/>
    <NotesList
      notes={notes}/>
  </div>
)

Notes.propTypes = {
  addNote: React.PropTypes.func.isRequired,
  notes: React.PropTypes.array.isRequired,
  username: React.PropTypes.string.isRequired,
}

export default Notes
