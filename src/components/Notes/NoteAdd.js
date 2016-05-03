import React from 'react'

class NoteAdd extends React.Component {
  handleSubmit () {
    const newNote = this.note.value
    this.note.value = ''
    this.props.addNote(newNote)
  }
  setRef (ref) {
    this.note = ref
  }
  render () {
    return (
      <div
        className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add new note"
          ref={(ref) => this.setRef(ref)}/>
        <span className="input-group-btn">
          <button
            className="btn btn-default"
            type="button"
            onClick={() => this.handleSubmit()}>
            Go
          </button>
        </span>
      </div>
    )
  }
}

NoteAdd.propTypes = {
  addNote: React.PropTypes.func.isRequired,
  username: React.PropTypes.string.isRequired,
}

export default NoteAdd
