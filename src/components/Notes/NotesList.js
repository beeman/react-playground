import React from 'react'

class NotesList extends React.Component {
  render () {
    const notes = this.props.notes.map((note, index) => {
      return <li className="list-group-item" key={index}>{note[ '.value' ]}</li>
    })
    return (
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
}

module.exports = NotesList
